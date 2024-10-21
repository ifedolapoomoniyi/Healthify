import { Link } from "react-router-dom";

const UpcomingAppointments = ({ data }) => {
	return (
		<div className="bg-[#111111] rounded-xl shadow-sm p-3 cursor-not-allowed opacity-45">
			{/* upcoming appointments */}
			<div className="rounded-xl border border-gray-800 p-5">
				<div className="flex flex-row justify-between items-center py-3">
					<h4 className="font-semibold">Upcoming Appointments</h4>
					<Link to="/user/appointments" className="p-1.5 px-4 border-2 border-secondary rounded-3xl hover:rounded-lg duration-300">View all</Link>
				</div>
				<div>
					{data.map((appointment, index) => (
						<div key={index} className="py-3">
							<h5>{appointment.title}</h5>
							<div className="flex flex-row gap-3 items-center text-sm">
								<p>{appointment.date}</p>
								<p>{appointment.time}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default UpcomingAppointments;
