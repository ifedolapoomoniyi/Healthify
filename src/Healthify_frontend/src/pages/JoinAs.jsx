import { FaResearchgate, FaUserDoctor } from "react-icons/fa6";
import { GoPersonFill } from "react-icons/go";
import { Link } from "react-router-dom";

const JoinAs = () => {
	return (
		<div className="p-5 text-white min-h-[90vh] flex flex-col items-center justify-center">
			<div className="flex flex-row gap-16 justify-center my-10">
				{/* signup as an individual */}
				<div className="bg-primary p-5 rounded-lg w-[300px] flex flex-col justify-between">
					<GoPersonFill className="text-3xl text-center w-full" />
					<div className="text-xl font-semibold py-3">
						Sign up as an individual
					</div>
					<div className="text-gray-300">
						Get the best of Asuta from a patient's perspective
					</div>
					<Link
						to={"signup/individual"}
						className="bg-black rounded-2xl py-1 px-4 mt-5 block border-2 border-secondary w-fit"
					>
						Sign up
					</Link>
				</div>

				{/* signup as an healtcare rep */}
				<div className="bg-primary p-5 rounded-lg w-[300px] flex flex-col justify-between">
					<FaUserDoctor className="text-3xl text-center w-full" />
					<div className="text-xl font-semibold py-3">
						Sign up as an healthcare representative
					</div>
					<div className="text-gray-300">
						Provide services, access patient data, earn extra funds
						and more
					</div>
					<Link
						to={"signup/provider"}
						className="bg-black rounded-2xl py-1 px-4 mt-5 block border-2 border-secondary w-fit"
					>
						Sign up
					</Link>
				</div>

				{/* signup as an researcher */}
				<div className="bg-primary p-5 rounded-lg w-[300px] flex flex-col justify-between">
					<FaResearchgate className="text-3xl text-center w-full" />
					<div className="text-xl font-semibold py-3">
						Sign up as an researcher
					</div>
					<div className="text-gray-300">
						Get the best of Asuta from a patient's perspective
					</div>
					<Link
						to={"signup/researcher"}
						className="bg-black rounded-2xl py-1 px-4 mt-5 block border-2 border-secondary w-fit"
					>
						Sign up
					</Link>
				</div>
			</div>

			<div>
				<div className="text-center block text-lg">
					Already have an account?{" "}
					<Link to={"/auth/login"} className="text-secondary">
						Login
					</Link>
				</div>
			</div>
		</div>
	);
};

export default JoinAs;
