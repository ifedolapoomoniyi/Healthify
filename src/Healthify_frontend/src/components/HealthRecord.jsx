import { TypographyH6 } from "./Typography";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

const HealthRecord = ({ data }) => {
	return (
		<div className="bg-primary rounded-lg p-6 h-fit">
			<div className="flex flex-row justify-between">
				<TypographyH6>Health records</TypographyH6>
				<div>
					<button className="border-2 border-secondary py-1 px-2 rounded-2xl hover:bg-green-900 duration-300 hover:rounded-lg">
						Share records
					</button>
				</div>
			</div>
			<div className="flex flex-row gap-2 my-2">
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback className="bg-secondary">I</AvatarFallback>
				</Avatar>
				<div className="flex flex-col gap-2">
					<span>{data.fullName}</span>
					<span className="text-orange-500 bg-opacity-50 bg-orange-500 rounded-2xl p-0.5 px-2 text-xs">
						{data.description}
					</span>
				</div>
			</div>

			{/* details */}
			<div className="flex flex-row gap-6 mt-5">
				<div className="space-y-2 text-gray-400">
					<div>Gender</div>
					<div>Blood group</div>
					<div>Hospital ID</div>
					<div>Allergies</div>
					<div>Date of Birth</div>
				</div>

				<div className="space-y-2">
					<div>{data.gender}</div>
					<div>{data.bloodgroup}</div>
					<div>{data.hospitalID}</div>
					<div>{data.allergies}</div>
					<div>{data.dob}</div>
				</div>
			</div>
		</div>
	);
};

export default HealthRecord;
