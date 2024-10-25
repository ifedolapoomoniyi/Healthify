import { TypographyH3, TypographyH5 } from "../../components/Typography";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button } from "../../components/ui/Button";
import { Healthify_backend } from "../../../../declarations/Healthify_backend";
import { useNavigate } from "react-router-dom";
import { differenceInYears } from "date-fns";
import { useEffect, useState } from "react";
import { useToast } from "../../hooks/use-toast";
import { FaCheck } from "react-icons/fa6";

const RegProvider = () => {
	const { toast } = useToast();
	// get user from localStorage
	const dob = JSON.parse(localStorage.getItem("user")).dob;
	const age = differenceInYears(new Date(), new Date(dob));

	// Calculate providerID
	const [providersSize, setProvidersSize] = useState(0);
	useEffect(() => {
		Healthify_backend.getProvidersSize().then((size) => {
			setProvidersSize(size);
		});
	});
	let providerId = Number(providersSize) + 1 + 500000;

	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const initial = JSON.parse(localStorage.getItem("user"));
	const initialValues = {
		phoneNumber: "",
		speciality: "",
		institution: "",
		telemedicine: false,
		issuingAuthority: "",
		licence: "",
	};
	const validationSchema = Yup.object({
		phoneNumber: Yup.string().required("Required"),
		speciality: Yup.string().required("Required"),
		institution: Yup.string().required("Required"),
		telemedicine: Yup.boolean().required("Required"),
		issuingAuthority: Yup.string().required("Required"),
		licence: Yup.string().required("Required"),
	});
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			setLoading(true);
			localStorage.setItem(
				"user",
				JSON.stringify({
					...initial,
					...values,
					age: age,
					providerId: providerId.toString(),
				})
			);
			const provider = JSON.parse(localStorage.getItem("user"));
			Healthify_backend.addProvider(provider).then((response) => {
				setLoading(false);
				console.log(response);
				console.log("success");
				toast({
					variant: "secondary",
					className:
						"text-white bg-green-700 border-none shadow-lg text-xl font-semibold",
					description: `Registration successful`,
				});
				setTimeout(navigate("/provider/dashboard"), 2000);
			});
		},
	});
	return (
		<div className="flex flex-row gap-5 text-white min-h-screen items-center bg-doctorsImage2 bg-cover">
			<div className="text-white p-5 max-w-[700px] md:p-10 bg-transparentBlack h-full min-h-screen">
				<TypographyH3>Welcome</TypographyH3>
				<p>A couple things we need to know about you</p>

				<TypographyH5 className={"py-5"}>
					Healthcare Provider Information
				</TypographyH5>

				<form
					onSubmit={formik.handleSubmit}
					className="p-5 max-w-[700px] flex flex-col gap-4"
				>
					<div className="flex flex-row gap-4 justify-between">
						<div className="flex flex-col gap-1">
							<label
								className="text-sm font-semibold"
								htmlFor="phoneNumber"
							>
								Phone Number
							</label>
							<input
								type="text"
								id="phoneNumber"
								name="phoneNumber"
								className="border border-gray-800 min-w-[250px] focus:border-secondary p-2 rounded-md bg-primary"
								{...formik.getFieldProps("phoneNumber")}
							/>
							{formik.touched.phoneNumber &&
							formik.errors.phoneNumber ? (
								<div className="text-red-500 text-xs">
									{formik.errors.phoneNumber}
								</div>
							) : null}
						</div>
						<div className="flex flex-col gap-1">
							<label
								className="text-sm font-semibold"
								htmlFor="speciality"
							>
								Speciality*
							</label>
							<input
								type="text"
								id="speciality"
								name="speciality"
								className="border border-gray-800 min-w-[250px] focus:border-secondary p-2 rounded-md bg-primary"
								{...formik.getFieldProps("speciality")}
							/>
							{formik.touched.speciality &&
							formik.errors.speciality ? (
								<div className="text-red-500 text-xs">
									{formik.errors.speciality}
								</div>
							) : null}
						</div>
					</div>

					<div className="flex flex-row gap-4 justify-between">
						<div className="flex flex-col gap-1">
							<label
								className="text-sm font-semibold"
								htmlFor="institution"
							>
								Hospital/Institution*
							</label>
							<input
								type="text"
								id="institution"
								name="institution"
								className="border border-gray-800 min-w-[250px] focus:border-secondary p-2 rounded-md bg-primary"
								{...formik.getFieldProps("institution")}
							/>
							{formik.touched.institution &&
							formik.errors.institution ? (
								<div className="text-red-500 text-xs">
									{formik.errors.institution}
								</div>
							) : null}
						</div>

						{/* <div className="flex flex-col gap-1 bg-red-500 cursor-not-allowed">
							<label
								className="text-sm font-semibold"
								htmlFor="telemedicine"
							>
								Telemedicine*{" "}
								<span className="text-sm text-gray-500">
									(Do you offer telemedical services?)
								</span>
							</label>
							<div className="flex flex-row gap-4">
								<div className="space-x-1">
									<input
										type="radio"
										id="yes"
										name="telemedicine" // This is important for the radio group
										value={true} // Each radio button needs its own value
										checked={
											formik.values.telemedicine === true
										} // Check if Formik's value is selected
										onChange={formik.handleChange} // Update Formik's value on change
										className="accent-secondary"
									/>
									<label htmlFor="yes">Yes</label>
								</div>

								<div className="space-x-1">
									<input
										type="radio"
										id="no"
										name="telemedicine"
										value={false}
										checked={
											formik.values.telemedicine === false
										}
										onChange={formik.handleChange}
										className="accent-secondary"
									/>
									<label htmlFor="no">
										{formik.values.telemedicine}
										No
									</label>
								</div>
							</div>
							{formik.touched.telemedicine &&
							formik.errors.telemedicine ? (
								<div className="text-red-500 text-xs">
									{formik.errors.telemedicine}
								</div>
							) : null}
						</div> */}
					</div>

					<div className="flex flex-col gap-1">
						<label
							className="text-sm font-semibold"
							htmlFor="issuingAuthority"
						>
							Issuing Authority*
						</label>
						<input
							type="text"
							id="issuingAuthority"
							name="issuingAuthority"
							className="border border-gray-800 min-w-[250px] focus:border-secondary p-2 rounded-md bg-primary"
							{...formik.getFieldProps("issuingAuthority")}
						/>
						{formik.touched.issuingAuthority &&
						formik.errors.issuingAuthority ? (
							<div className="text-red-500 text-xs">
								{formik.errors.issuingAuthority}
							</div>
						) : null}
					</div>

					<div className="flex flex-col gap-1">
						<label
							className="text-sm font-semibold"
							htmlFor="licence"
						>
							Licence Number*
						</label>
						<input
							type="text"
							id="licence"
							name="licence"
							className="border border-gray-800 min-w-[250px] focus:border-secondary p-2 rounded-md bg-primary"
							{...formik.getFieldProps("licence")}
						/>
						{formik.touched.licence && formik.errors.licence ? (
							<div className="text-red-500 text-xs">
								{formik.errors.licence}
							</div>
						) : null}
					</div>

					<Button
						variant={"secondary"}
						type="submit"
						className={`text-white hover:backgroundHover`}
					>
						{loading ? "Submitting..." : "Submit"}

						{loading && (
							<svg
								className="animate-spin h-4 w-4 mr-2 text-white"
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
			</div>
		</div>
	);
};

export default RegProvider;
