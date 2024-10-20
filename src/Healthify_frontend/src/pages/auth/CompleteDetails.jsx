import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "../../components/ui/Button";
import { TypographyH3, TypographyH5 } from "../../components/Typography";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Healthify_backend } from "../../../../declarations/Healthify_backend";
import { differenceInYears } from "date-fns";

const CompleteDetails = () => {
	// Get user from localstorage
	const user = JSON.parse(localStorage.getItem("user"));
	const [loading, setLoading] = useState(false);
	const [patientsSize, setPatientsSize] = useState(0);
	const navigate = useNavigate();
	const navigateToDashboard = () => {
		navigate("/user/dashboard");
	};
	const dob = JSON.parse(localStorage.getItem("user")).dob;
	const age = differenceInYears(new Date(), new Date(dob));

	useEffect(() => {
		// get no of patients and use to calculate user id
		Healthify_backend.getPatientsSize().then((size) => {
			setPatientsSize(size);
		});
	}, []);

	// convert patientsize from big int to number
	let userId = Number(patientsSize) + 1 + 1000000;;
	
	// form handling
	const initialValues = {
		bloodGroup: "",
		allergies: "",
		existingConditions: "",
		existingMedications: "",
		genotype: "",
	};
	const validationSchema = Yup.object({
		bloodGroup: Yup.string().required("Required"),
		allergies: Yup.string().required("Required"),
		existingConditions: Yup.string().required("Required"),
		existingMedications: Yup.string().required("Required"),
		genotype: Yup.string().required("Required"),
	});
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			console.log(values);

			// set calculated user id and medical info into localstorage
			localStorage.setItem(
				"user",
				JSON.stringify({
					...user,
					medicalInfo: values,
					patientId: userId.toString(),
					age: age,
				})
			);
			const patient = JSON.parse(localStorage.getItem("user"));

			// Add patient
			Healthify_backend.addPatient(patient).then((response) => {
				setLoading(false);
				console.log("Patient added");
				console.log(response);

				navigateToDashboard();
			});
		},
	});
	return (
		<div className="text-white">
			<div className="p-8">
				<TypographyH3>Continuewww</TypographyH3>
				<p>
					Still a couple more thingss we need to improve your
					experience
				</p>
				<TypographyH5 className={"py-5"}>
					Medical Information
				</TypographyH5>

				<form
					onSubmit={formik.handleSubmit}
					className="flex flex-col gap-8 max-w-[700px]"
				>
					<div className="flex flex-row gap-4 justify-between">
						<div className="flex flex-col gap-1">
							<label className="text-sm font-semibold pb-1">
								Blood Group
							</label>
							<input
								type="text"
								className="border border-gray-800 min-w-[250px] focus:border-secondary p-2 rounded-md bg-primary"
								name="bloodGroup"
								onChange={formik.handleChange}
								value={formik.values.bloodGroup}
							/>

							{formik.errors.bloodGroup &&
								formik.touched.bloodGroup && (
									<div className="text-red-500">
										{formik.errors.bloodGroup}
									</div>
								)}
						</div>

						<div className="flex flex-col gap-1">
							<label className="text-sm font-semibold pb-1">
								Allergies (if any)
							</label>
							<input
								type="text"
								className="border border-gray-800 min-w-[250px] focus:border-secondary p-2 rounded-md bg-primary"
								name="allergies"
								onChange={formik.handleChange}
								value={formik.values.allergies}
							/>

							{formik.errors.allergies &&
								formik.touched.allergies && (
									<div className="text-red-500">
										{formik.errors.allergies}
									</div>
								)}
						</div>
					</div>

					<div className="flex flex-row gap-4 justify-between">
						<div className="flex flex-col gap-1">
							<label className="text-sm font-semibold pb-1">
								Existing medical conditions
							</label>
							<input
								type="text"
								className="border border-gray-800 min-w-[250px] focus:border-secondary p-2 rounded-md bg-primary"
								name="existingConditions"
								onChange={formik.handleChange}
								value={formik.values.existingConditions}
							/>

							{formik.errors.existingConditions &&
								formik.touched.existingConditions && (
									<div className="text-red-500">
										{formik.errors.existingConditions}
									</div>
								)}
						</div>

						<div className="flex flex-col gap-1">
							<label className="text-sm font-semibold pb-1">
								Genotype
							</label>
							<input
								type="text"
								className="border border-gray-800 min-w-[250px] focus:border-secondary p-2 rounded-md bg-primary"
								name="genotype"
								onChange={formik.handleChange}
								value={formik.values.genotype}
							/>

							{formik.errors.genotype &&
								formik.touched.genotype && (
									<div className="text-red-500">
										{formik.errors.genotype}
									</div>
								)}
						</div>
					</div>

					<div className="flex flex-col gap-1">
						<label className="text-sm font-semibold pb-1">
							Existing Medications (if any)
						</label>
						<input
							type="text"
							className="border border-gray-800 min-w-[250px] focus:border-secondary p-2 rounded-md bg-primary"
							name="existingMedications"
							onChange={formik.handleChange}
							value={formik.values.existingMedications}
						/>

						{formik.errors.existingMedications &&
							formik.touched.existingMedications && (
								<div className="text-red-500">
									{formik.errors.existingMedications}
								</div>
							)}
					</div>

					<Button
						type="submit"
						variant={"secondary"}
						className="hover:bg-secondaryHover text-white"
					>
						Finish
					</Button>
				</form>
			</div>
		</div>
	);
};

export default CompleteDetails;
