import { Link } from "react-router-dom";
import { TypographyH6 } from "./Typography";
import { Healthify_backend } from "../../../declarations/Healthify_backend";
import { useEffect, useState } from "react";
import { usePatientsStore } from "../lib/store";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../components/ui/table";

const ViewedPatients = () => {
	// for now get all patients
	const { setPatients, patients } = usePatientsStore();
	console.log(patients);
	useEffect(() => {
		Healthify_backend.getAllPatients().then((data) => {
			setPatients(data);
		});
	}, []);
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-row justify-between items-center">
				<TypographyH6>Recently Viewed</TypographyH6>
				<Link to="/provider/recently-viewed-all">
					<button className="border-2 border-secondary py-1 px-2 rounded-2xl hover:bg-green-900 duration-300 hover:rounded-lg">
						View all
					</button>
				</Link>
			</div>

			<Table>
				<TableCaption>Recently viewed patients</TableCaption>
				<TableHeader>
					<TableRow>
						<TableCell>Id</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Age</TableCell>
						<TableCell>Gender</TableCell>
						<TableCell>Existing Condition</TableCell>
					</TableRow>
				</TableHeader>
				{patients?.map((patient) => (
					<TableBody>
						<TableRow>
							<TableCell>{patient.patientId}</TableCell>
							<TableCell>{patient.fullName}</TableCell>
							<TableCell>{Number(patient.age)}</TableCell>
							<TableCell>{patient.gender}</TableCell>
							<TableCell>
								{patient.medicalInfo.existingConditions}
							</TableCell>
							<TableCell>
								<Link
									to={`/proivder/view-patient/${patient.patientId}`}
									className="border-2 border-secondary py-1 px-2 rounded-2xl hover:bg-green-900 duration-300 hover:rounded-lg block text-nowrap"
								>
									View More
								</Link>
							</TableCell>
						</TableRow>
					</TableBody>
				))}
			</Table>
		</div>
	);
};

export default ViewedPatients;
