import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Link } from "react-router-dom";

const PatientCard = ({ patient }) => {
	return (
		<div className="bg-primary rounded-lg p-6 h-fit">
			<div className="flex flex-row gap-2 my-2">
				<Avatar>
					<AvatarImage
						className="h-14 w-14 rounded-full"
						src="https://github.com/shadcn.png"
					/>
					<AvatarFallback className="bg-secondary">I</AvatarFallback>
				</Avatar>
				<div className="flex flex-col gap-2">
					<span>{patient[0]?.fullName}</span>
					<span className="text-orange-500 bg-opacity-50 bg-orange-500 rounded-2xl p-0.5 px-2 text-xs">
						{patient[0]?.medicalInfo.existingConditions}
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
					<div>Age</div>
				</div>

				<div className="space-y-2">
					<div>{patient[0]?.gender}</div>
					<div>{patient[0]?.medicalInfo.bloodGroup}</div>
					<div>{patient[0]?.patientId}</div>
					<div>{patient[0]?.medicalInfo.allergies}</div>
					<div>{Number(patient[0]?.age)}</div>
				</div>
			</div>

			<div className="pt-4 w-full">
				<Link
					to={`/provider/view-patient/${patient[0].patientId}`}
          onClick={() => localStorage.setItem("patientId", JSON.stringify(patient[0].patientId))}
					className="ml-auto block w-fit border-2 border-secondary py-1 px-2 rounded-2xl hover:bg-green-900 duration-300 hover:rounded-lg text-sm"
				>
					View more
				</Link>
			</div>
		</div>
	);
};

export default PatientCard;
