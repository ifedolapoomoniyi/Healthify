import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import Image from "/images/auth/create-account-img.png";
import { TypographyH4 } from "../../components/Typography";
import * as Yup from "yup";
import { useFormik } from "formik";

const CreateAcc = () => {
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
		<div className="flex flex-row gap-5 text-white h-screen items-center bg-healthImage bg-cover">
			<div className="p-5 max-w-[529px] md:p-10 bg-transparentBlack h-full">
				<div>
					<TypographyH4 className={"my-5"}>Create a new account</TypographyH4>
					<p>
						Welcome to Healthify, where we empower patients,
						healthcare providers, and researchers through secure and
						transparent blockchain technology.
					</p>
				</div>
				<div>
					<Button className="w-full my-5 hover:bg-primaryHover duration-300 transition-all">Continue with wallet</Button>

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
								<div className="text-white text-xs">
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
								<div className="text-white text-xs">
									{formik.errors.password}
								</div>
							) : null}
						</div>
						<Button className="bg-secondary w-full my-10 hover:bg-secondaryHover" type="submit">Sign Up</Button>
					</form>

					<div className="text-right">
						Already have an account? <Link to={'/auth/login'} className="text-secondary">Log in</Link>
					</div>
				</div>
			</div>

			<div>
				{/* <img src={Image} alt="" /> */}
			</div>
		</div>
	);
};

export default CreateAcc;