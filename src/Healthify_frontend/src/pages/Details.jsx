import { TypographyH3, TypographyH4 } from "../components/Typography";

const Details = () => {
	return (
		<div>
			<TypographyH3>Welcome</TypographyH3>
			<p>Let us know more about you</p>

			<TypographyH4>Personal Information</TypographyH4>

			<form action="">
				<div className="flex flex-col gap-1">
					<label className="text-sm font-semibold" htmlFor="fullname">
						Fullname*
					</label>
					<input
						type="text"
						placeholder="your full name"
						className="border border-gray-200 p-2 rounded-md bg-primary"
						{...formik.getFieldProps("email")}
					/>
					{formik.touched.fullname && formik.errors.fullname ? (
						<div className="text-white text-xs">
							{formik.errors.fullname}
						</div>
					) : null}
				</div>
				<div className="flex flex-col gap-1">
					<label className="text-sm font-semibold" htmlFor="password">
						Password*
					</label>
					<input
						type="password"
						placeholder="*******"
						className="border border-gray-200 p-2 rounded-md bg-primary"
						{...formik.getFieldProps("password")}
					/>
					{formik.touched.password && formik.errors.password ? (
						<div className="text-white text-xs">
							{formik.errors.password}
						</div>
					) : null}
          
				</div>
			</form>
		</div>
	);
};

export default Details;
