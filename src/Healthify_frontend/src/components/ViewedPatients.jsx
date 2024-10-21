import { Link } from "react-router-dom";
import { TypographyH6 } from "./Typography";
import { Healthify_backend } from "../../../declarations/Healthify_backend";
import { useEffect, useState } from "react";
import { usePatientsStore } from "../lib/store";

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
	useEffect(() => {
		Healthify_backend.getAllPatients().then((data) => {
			setPatients(data);
		});
	}, []);
	return (
		<div className="flex flex-col gap-4 m-auto">
			<div className="flex flex-row justify-between items-center pt-5">
				<h2 className="text-lg font-semibold ">Recently Viewed</h2>
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
					<TableBody key={patient.patientId}>
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
									to={`/provider/view-patient/${patient.patientId}`}
									className="border-2 border-secondary py-1 px-2 rounded-2xl hover:bg-green-900 duration-300 hover:rounded-lg block text-nowrap w-fit"
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
