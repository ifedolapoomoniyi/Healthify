import { useParams } from "react-router-dom";
import ProviderSidebar from "../../components/ProviderSidebar";
import ProviderTopbar from "../../components/ProviderTopbar";
import { useEffect, useState } from "react";
import { Healthify_backend } from "../../../../declarations/Healthify_backend";
import { format } from "date-fns";
import { useProviderStore } from "../../lib/store";

const PatientDetails = () => {
	const { provider } = useProviderStore();
	const date = new Date();
	const patientId = useParams().id;
	const [patient, setPatient] = useState({});
	const [loading, setLoading] = useState(false);
	const [accessLogs, setAccessLogs] = useState([]);

	// Only create the access log if provider data is available
	const accessLog = provider?.length
		? {
				providerId: provider[0]?.providerId,
				time:
					format(date, "yyyy-MM-dd").toString() +
					" at " +
					format(date, "HH:mm:ss").toString(),
		  }
		: null;

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				// Fetch patient details
				const patientData = await Healthify_backend.getPatient(
					patientId
				);
				setPatient(patientData[0]);

				// Fetch access logs
				const accessLogData =
					await Healthify_backend.getPatientAccessLogs(patientId);
				setAccessLogs(accessLogData);
			} catch (error) {
				console.error("Error fetching data: ", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [patientId]);

	// Update access log only if accessLog is not null
	const updateAccessLog = async () => {
		if (!accessLog) {
			console.warn("Access log not created: Provider data missing");
			return;
		}

		try {
			const updatedLogs = [...accessLogs[0].viewedProviders, accessLog];
			console.log(updatedLogs)
			await Healthify_backend.updateAccessLog(patientId, updatedLogs);
			setAccessLogs(updatedLogs);
			console.log("Access logs updated:", updatedLogs);
		} catch (error) {
			console.error("Error updating access logs:", error);
		}
	};

	// Call updateAccessLog after accessLogs have been fetched
	useEffect(() => {
		if (accessLogs.length > 0 && accessLog) {
			updateAccessLog();
		}
	}, [accessLogs]);

	if (loading) {
		return (
			<div className="flex flex-row text-white">
				<ProviderSidebar />
				<div className="w-full p-5">
					<ProviderTopbar />
					<div className="flex justify-center items-center h-screen">
						<svg
							className="animate-spin h-10 w-10 mr-2 text-white pl-1 text-center"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="4"
							></circle>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
							></path>
						</svg>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="flex flex-row text-white">
			<ProviderSidebar />
			<div className="w-full p-5">
				<ProviderTopbar />
				<div className="grid lg:grid-cols-2 gap-5 grid-rows-2">
					{/* Patient Details */}
					<div className="bg-primary rounded-xl p-5 my-5 h-fit pb-10">
						<h3 className="py-4 text-xl font-semibold text-center">
							{patient.fullName}
						</h3>
						<div className="flex flex-row gap-4 items-center justify-center w-full">
							<div className="flex flex-col gap-2">
								<span>Age :</span>
								<span>Occupation :</span>
								<span>Gender :</span>
								<span>Patient ID :</span>
								<span>Address :</span>
								<span>Genotype :</span>
								<span>Existing Condition :</span>
								<span>Allergies :</span>
								<span>Blood Group :</span>
								<span>Next of Kin :</span>
								<span>Next of Kin's number :</span>
							</div>
							<div className="flex flex-col gap-2">
								<span>{Number(patient.age)}</span>
								<span>{patient?.occupation}</span>
								<span>{patient?.gender}</span>
								<span>{patient?.patientId}</span>
								<span>{patient?.address}</span>
								<span>{patient?.medicalInfo?.genotype}</span>
								<span>
									{patient?.medicalInfo?.existingConditions}
								</span>
								<span>{patient?.medicalInfo?.allergies}</span>
								<span>{patient?.medicalInfo?.bloodGroup}</span>
								<span>{patient?.nextOfKin}</span>
								<span>{patient?.nextOfKinPhone}</span>
							</div>
						</div>
					</div>

					{/* Doctor's Notes */}
					<div className="bg-primary rounded-lg p-6 h-fit my-5">
						<h2 className="text-xl font-semibold py-4">
							Doctor's Notes
						</h2>
						<p>
							<strong>Patient Name:</strong> {patient.fullName}
						</p>
						<p>
							<strong>DOB:</strong> {patient.dob}
						</p>
						<p>
							<strong>Visit Date:</strong> 10/15/2024
						</p>
						<p>
							<strong>Reason for Visit:</strong> Routine follow-up
							for hypertension
						</p>

						<hr />

						<h3>
							Subjective (Patient's account of their symptoms)
						</h3>
						<p>
							<strong>Chief Complaint:</strong> No new complaints,
							here for routine follow-up.
						</p>
						<p>
							<strong>History of Present Illness (HPI):</strong>
						</p>
						<ul>
							<li>
								Reports good compliance with prescribed
								antihypertensive medications (Lisinopril 10mg
								daily).
							</li>
							<li>
								Denies chest pain, palpitations, shortness of
								breath, or lower extremity edema.
							</li>
						</ul>

						<h3>Objective (Provider's observations)</h3>
						<p>
							<strong>Vital Signs:</strong> BP 130/80, HR 72, RR
							16, T 98.6, Wt 150 lbs, Ht 5'10".
						</p>
						<p>
							<strong>General:</strong> Well-developed,
							well-nourished, in no acute distress.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PatientDetails;
