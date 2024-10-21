import Donate from "../../components/Donate";
import HealthRecord from "../../components/HealthRecord";
import ResearchCard from "../../components/ResearchCard";
import Sidebar from "../../components/Sidebar";
import TopBar from "../../components/TopBar";
import { Button } from "../../components/ui/Button";
import UpcomingAppointments from "../../components/UpcomingAppointments";
import doctor from "/images/doctor.png";
import { healthData, upcomingAppointments } from "../../lib/data";
import { useUserStore } from "../../lib/store";

const Dashboard = () => {
	const { user } = useUserStore();
	return (
		<div className="text-white flex flex-row">
			<Sidebar />

			<div className="w-full p-5">
				<TopBar />

				<div className="grid md:grid-cols-2 gap-4 py-5">
					{/* Greet component */}
					<div className="p-5 rounded-3xl m-10 bg-secondary space-y-2 relative overflow-hidden">
						<h1 className="md:text-3xl text-2xl z-20">
							Good morning, {user?.[0]?.fullName?.split(" ")[0]}
						</h1>
						<p className="z-20">
							Did you know, an Apple a day could keep the doctor
							away?
						</p>
						<img
							src={doctor}
							alt=""
							className="h-72 absolute right-0 top-7 z-10"
						/>
					</div>

					{/* upcoming appointments */}
					<UpcomingAppointments data={upcomingAppointments} />

					{/* Health records */}
					<HealthRecord data={healthData} />

					<div>
						<ResearchCard />
						<Donate />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
