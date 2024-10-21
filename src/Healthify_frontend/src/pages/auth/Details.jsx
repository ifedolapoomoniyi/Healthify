import { TypographyH3, TypographyH5 } from "../../components/Typography";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const Details = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const role = user.role;
	console.log(role);
	const navigate = useNavigate();
	const navigateToCompleteDetails = () => {
		navigate("/auth/signup/form/2");
	};

	// form handling
	const initialValues = {
		fullName: "",
		email: "",
		phoneNumber: "",
		dob: "",
		gender: "",
		occupation: "",
		address: "",
		nextOfKin: "",
		nextOfKinPhone: "",
	};
	const validationSchema = Yup.object({
		fullName: Yup.string().required("Required"),
		email: Yup.string().required("Required").email("Invalid email"),
		phoneNumber: Yup.string().required("Required"),
		dob: Yup.string().required("Required"),
		gender: Yup.string().required("required"),
		occupation: Yup.string().required("Required"),
		address: Yup.string().required("Required"),
		nextOfKin: Yup.string().required("Required"),
		nextOfKinPhone: Yup.string().required("Required"),
	});
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			console.log(values);
			localStorage.setItem(
				"user",
				JSON.stringify({ ...user, ...values })
			);
			if (role === "provider") {
				navigate("/auth/signup/provider/verify");
			} else {
				navigateToCompleteDetails();
			}
		},
	});
	return (
		<div className="text-white p-8">
			<TypographyH3>Welcome</TypographyH3>
			<p>Let us know more about you</p>

			<TypographyH5 className={"py-5"}>Personal Information</TypographyH5>

			<form
				onSubmit={formik.handleSubmit}
				className="p-5 max-w-[700px] flex flex-col gap-4"
			>
				<div className="flex flex-col gap-1">
					<label className="text-sm font-semibold" htmlFor="fullName">
						FullName*
					</label>
					<input
						type="text"
						placeholder="your full name"
						className="border border-gray-800 min-w-[250px] focus:border-secondary p-2 rounded-md bg-primary"
						{...formik.getFieldProps("fullName")}
					/>
					{formik.touched.fullName && formik.errors.fullName ? (
						<div className="text-red-500 text-xs">
							{formik.errors.fullName}
						</div>
					) : null}
				</div>
				<div className="flex flex-row gap-4 justify-between">
					<div className="flex flex-col gap-1">
						<label
							className="text-sm font-semibold"
							htmlFor="email"
						>
							Email address
						</label>
						<input
							type="email"
							placeholder="youremail@email.com"
							className="border border-gray-800 min-w-[250px] focus:border-secondary p-2 rounded-md bg-primary"
							{...formik.getFieldProps("email")}
						/>
						{formik.touched.email && formik.errors.email ? (
							<div className="text-red-500 text-xs">
								{formik.errors.email}
							</div>
						) : null}
					</div>
					<div className="flex flex-col gap-1">
						<label
							className="text-sm font-semibold"
							htmlFor="phoneNumber"
						>
							Phone Number*
						</label>
						<input
							type="text"
							placeholder="your phone number"
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
				</div>

				<div className="flex flex-row gap-2 justify-between">
					<div className="flex flex-col gap-1">
						<label className="text-sm font-semibold" htmlFor="dob">
							Date of Birth*
						</label>
						<input
							type="date"
							placeholder="your date of birth"
							className="border border-gray-800 min-w-[250px] focus:border-secondary p-2 rounded-md bg-primary"
							{...formik.getFieldProps("dob")}
						/>
						{formik.touched.dob && formik.errors.dob ? (
							<div className="text-red-500 text-xs">
								{formik.errors.dob}
							</div>
						) : null}
					</div>

					<div className="flex flex-col gap-1">
						<label
							className="text-sm font-semibold"
							htmlFor="gender"
						>
							Gender
						</label>
						<input
							type="text"
							placeholder="your gender"
							className="border border-gray-800 min-w-[250px] focus:border-secondary p-2 rounded-md bg-primary"
							{...formik.getFieldProps("gender")}
						/>
						{formik.touched.gender && formik.errors.gender ? (
							<div className="text-red-500 text-xs">
								{formik.errors.gender}
							</div>
						) : null}
					</div>
				</div>

				<div className="flex flex-col gap-1">
					<label
						className="text-sm font-semibold"
						htmlFor="occupation"
					>
						Occupation*
					</label>
					<input
						type="text"
						placeholder="your occupation"
						className="border border-gray-800 min-w-[250px] focus:border-secondary p-2 rounded-md bg-primary"
						{...formik.getFieldProps("occupation")}
					/>
					{formik.touched.occupation && formik.errors.occupation ? (
						<div className="text-red-500 text-xs">
							{formik.errors.occupation}
						</div>
					) : null}
				</div>
				<div className="flex flex-col gap-1">
					<label className="text-sm font-semibold" htmlFor="address">
						Address*
					</label>
					<input
						type="text"
						placeholder="your address"
						className="border border-gray-800 min-w-[250px] focus:border-secondary p-2 rounded-md bg-primary"
						{...formik.getFieldProps("address")}
					/>
					{formik.touched.address && formik.errors.address ? (
						<div className="text-red-500 text-xs">
							{formik.errors.address}
						</div>
					) : null}
				</div>

				<div className="flex flex-row gap-4 justify-between">
					<div className="flex flex-col gap-1">
						<label
							className="text-sm font-semibold"
							htmlFor="nextOfKin"
						>
							Next of Kin*
						</label>
						<input
							type="text"
							placeholder="your next of kin"
							className="border border-gray-800 min-w-[250px] focus:border-secondary p-2 rounded-md bg-primary"
							{...formik.getFieldProps("nextOfKin")}
						/>
						{formik.touched.nextOfKin && formik.errors.nextOfKin ? (
							<div className="text-red-500 text-xs">
								{formik.errors.nextOfKin}
							</div>
						) : null}
					</div>
					<div className="flex flex-col gap-1">
						<label
							className="text-sm font-semibold"
							htmlFor="nextOfKinPhone"
						>
							Next of Kin Phone*
						</label>
						<input
							type="text"
							placeholder="your next of kin's phone number"
							className="border border-gray-800 min-w-[250px] focus:border-secondary p-2 rounded-md bg-primary"
							{...formik.getFieldProps("nextOfKinPhone")}
						/>
						{formik.touched.nextOfKinPhone &&
						formik.errors.nextOfKinPhone ? (
							<div className="text-red-500 text-xs">
								{formik.errors.nextOfKinPhone}
							</div>
						) : null}
					</div>
				</div>
				<Button
					type="submit"
					variant={"secondary"}
					className="hover:bg-secondaryHover text-white"
				>
					Let's go
				</Button>
			</form>
		</div>
	);
};

export default Details;
