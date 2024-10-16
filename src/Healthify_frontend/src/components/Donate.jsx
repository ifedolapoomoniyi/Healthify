import { Link } from "react-router-dom";
import { TypographyH6 } from "./Typography";
import ct_scanner from "/images/ct-scanner.png";

const text =
	"The University College Hospital, Ibadan is in need of a new CT scanner to help in the diagnosis of patients. The current one is old and needs to be replaced.";

const Donate = () => {
	return (
		<div className="mt-4 bg-primary p-5 rounded-xl">
			<div className="flex flex-row justify-between items-center mb-2">
				<TypographyH6 className={"pb-3"}>Donate</TypographyH6>
				<Link
					to="/donate"
					className="py-1 px-2 rounded-lg bg-primary text-sm border border-gray-700 font-light"
				>
					View more
				</Link>
			</div>

			<div className="flex flex-row gap-3 rounded-lg border border-e-gray-500">
				<div className="">
					<img src={ct_scanner} alt="" className="h-full w-72" />
				</div>

				<div className="py-2">
					<h6 className="text-lg font-semibold">
						CT scanner for UCH
					</h6>
					<div className="text-sm text-gray-400">
						<p>
							{text.length > 100
								? text.slice(0, 100) + "..."
								: text}
						</p>

            <button className="bg-black rounded-3xl py-2 px-4 text-white border-2 border-secondary mt-3">Donate now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Donate;
