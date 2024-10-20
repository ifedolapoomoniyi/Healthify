import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import Image from "/images/auth/create-account-img.png";
import { TypographyH4 } from "../../components/Typography";
import * as Yup from "yup";
import { useFormik } from "formik";

const CreateAcc = () => {
	const { role } = useParams();
	const navigate = useNavigate();
	const navigateTo = () => {
		navigate(`/auth/signup/form`);
	};

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			role: role || "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email address")
				.required("Required"),
			password: Yup.string()
				.required("Required")
				.min(6, "Must be at least 8 characters"),
			role: Yup.string(),
		}),
		onSubmit: (values) => {
			console.log(values);
			localStorage.setItem("user", JSON.stringify(values));
			navigateTo();
		},
	});

	return (
		<div className="flex flex-row gap-5 text-white h-screen items-center bg-healthImage bg-cover">
			<div className="p-5 max-w-[529px] md:p-10 bg-transparentBlack h-full">
				<div>
					<TypographyH4 className={"my-5"}>
						Create a new account
					</TypographyH4>
					<p>
						Welcome to Asuta, where we empower patients, healthcare
						providers, and researchers through secure and
						transparent blockchain technology.
					</p>
				</div>
				<div>
					<Button className="w-full my-5 hover:bg-primaryHover duration-300 transition-all">
						Continue with wallet
					</Button>

					<div className="my-5 text-center text-gray-600">OR</div>
					<form onSubmit={formik.handleSubmit} className="space-y-3">
						<div className="flex flex-col gap-1">
							<label
								className="text-sm font-semibold"
								htmlFor="email"
							>
								Email*
							</label>
							<input
								type="email"
								placeholder="johnDoe@email.com"
								className="border border-gray-200 p-2 rounded-md bg-primary"
								{...formik.getFieldProps("email")}
							/>
							{formik.touched.email && formik.errors.email ? (
								<div className="text-red-600 text-xs">
									{formik.errors.email}
								</div>
							) : null}
						</div>
						<div className="flex flex-col gap-1">
							<label
								className="text-sm font-semibold"
								htmlFor="password"
							>
								Password*
							</label>
							<input
								type="password"
								placeholder="*******"
								className="border border-gray-200 p-2 rounded-md bg-primary"
								{...formik.getFieldProps("password")}
							/>
							{formik.touched.password &&
							formik.errors.password ? (
								<div className="text-red-600 text-xs">
									{formik.errors.password}
								</div>
							) : null}
						</div>
						<div className="flex flex-row gap-5 my-3">
							<div className="space-x-1">
								<input
									type="radio"
									id="individual"
									name="role" // This is important for the radio group
									value="individual" // Each radio button needs its own value
									checked={
										formik.values.role === "individual"
									} // Check if Formik's value is selected
									onChange={formik.handleChange} // Update Formik's value on change
									className="accent-secondary"
								/>
								<label htmlFor="individual">Individual</label>
							</div>

							<div className="space-x-1">
								<input
									type="radio"
									id="provider"
									name="role"
									value="provider"
									checked={formik.values.role === "provider"}
									onChange={formik.handleChange}
									className="accent-secondary"
								/>
								<label htmlFor="provider">
									Healthcare Provider
								</label>
							</div>

							<div className="space-x-1 mb-8">
								<input
									type="radio"
									id="researcher"
									name="role"
									value="researcher"
									checked={
										formik.values.role === "researcher"
									}
									onChange={formik.handleChange}
									className="accent-secondary"
								/>
								<label htmlFor="researcher">Researcher</label>
							</div>
						</div>

						<Button
							className="bg-secondary w-full hover:bg-secondaryHover"
							type="submit"
						>
							Sign Up
						</Button>
					</form>

					<div className="text-right mt-5">
						Already have an account?{" "}
						<Link to={"/auth/login"} className="text-secondary">
							Log in
						</Link>
					</div>
				</div>
			</div>

			<div>{/* <img src={Image} alt="" /> */}</div>
		</div>
	);
};

export default CreateAcc;
