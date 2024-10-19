import { Link, useParams } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import Image from "/images/auth/create-account-img.png";
import { TypographyH4 } from "../../components/Typography";
import * as Yup from "yup";
import { useFormik } from "formik";

const Login = () => {
const { role } = useParams();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email address")
				.required("Required"),
			password: Yup.string()
				.required("Required")
				.min(6, "Must be at least 8 characters"),
		}),
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<div className="flex flex-row gap-5 text-white h-screen items-center justify-end bg-healthImage bg-cover">
			<div className="p-5 w-full max-w-[529px] md:p-10 bg-transparentBlack h-full">
				<div>
					<TypographyH4 className={"my-5"}>Log In</TypographyH4>
					<p>Welcome to Asuta, we missed you</p>
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

							<Link
								to={"/auth/forgot-password"}
								className="text-secondary text-sm text-right"
							>
								Forgot Password?
							</Link>
						</div>

						<div className="flex flex-row gap-5 my-3">
							<div className="space-x-1 ">
								<input
									type="radio"
									name="role"
									id="individual"
									defaultChecked={
										role == "individual" ? true : false
									}
									className=" accent-secondary"
								/>
								<label htmlFor="individual">Individual</label>
							</div>
							<div className="space-x-1 ">
								<input
									type="radio"
									name="role"
									id="provider"
									className=" accent-secondary"
									defaultChecked={
										role == "provider" ? true : false
									}
								/>
								<label htmlFor="provider">
									Healthcare Provider
								</label>
							</div>
							<div className="space-x-1 ">
								<input
									type="radio"
									name="role"
									id="researcher"
									defaultChecked={
										role == "researcher" ? true : false
									}
									className=" accent-secondary"
								/>
								<label htmlFor="researcher">Researcher</label>
							</div>
						</div>
						<Button
							className="bg-secondary w-full my-10 hover:bg-secondaryHover"
							type="submit"
						>
							Sign Up
						</Button>
					</form>

					<div className="text-right text-sm">
						Don't have an account?{" "}
						<Link to={"/auth/signup"} className="text-secondary">
							Sign up
						</Link>
					</div>
				</div>
			</div>

			<div>{/* <img src={Image} alt="" /> */}</div>
		</div>
	);
};

export default Login;
