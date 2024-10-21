import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Healthify_backend } from "../../../declarations/Healthify_backend";
import { Button } from "./ui/Button";
import { FaMagnifyingGlass } from "react-icons/fa6";
import PatientCard from "./PatientCard";

const FindPatient = () => {
	const [patient, setPatient] = useState(null);
	const [notFound, setNotFound] = useState(false);
	const [loading, setLoading] = useState(false);

	const initialValues = {
		patientId: "",
	};
	const validationSchema = Yup.object({
		patientId: Yup.string().required("Required"),
	});
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			setLoading(true);
			console.log(values);
			Healthify_backend.getPatient(values.patientId).then((response) => {
				if (response.length === 0) {
					setNotFound(true);
					setPatient(null);
				} else {
					setNotFound(false);
					setPatient(response);
				}
				console.log(response);
				setLoading(false);
			});
		},
	});
	return (
		<div className="m-auto">
			<form
				onSubmit={formik.handleSubmit}
				className="my-10 py-3 relative"
			>
				<FaMagnifyingGlass className="absolute left-3 top-6 text-gray-600" />
				<input
					type="text"
					name="patientId"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.patientId}
					className="bg-primary rounded-lg p-2 px-3 w-72 pl-10 mr-1"
					placeholder="Search patient by Patient ID"
				/>
				{/* {formik.touched.patientId && formik.errors.patientId ? (
					<div>{formik.errors.patientId}</div>
				) : null} */}
				<Button
					variant={"secondary"}
					className="text-white"
					type="submit"
				>
					{loading ? "Loading..." : "Search"}
					{loading && (
						<svg
							className="animate-spin h-4 w-4 mr-2 text-white pl-1"
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
					)}
				</Button>
			</form>
			{notFound && (
				<div className="bg-primary p-4 rounded-lg text-red-500">Patient not found</div>
			)	
			}
			{patient && (
				<div>
					<PatientCard patient={patient} />
				</div>
			)}
		</div>
	);
};

export default FindPatient;
