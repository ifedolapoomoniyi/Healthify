import ProviderSidebar from "../../components/ProviderSidebar";
import ProviderTopbar from "../../components/ProviderTopbar";
import { getHours } from "date-fns";
import { useProviderStore } from "../../lib/store";
import UpcomingAppointments from "../../components/UpcomingAppointments";
import { upcomingAppointmentsProvider } from "../../lib/data";
import ViewedPatients from "../../components/ViewedPatients";

const ProviderDashboard = () => {
	// get period of day
	const date = new Date();
	const hours = getHours(date);
	let timeOfDay = "";

	if (hours < 12) {
		timeOfDay = "morning";
	} else if (hours < 18) {
		timeOfDay = "afternoon";
	} else {
		timeOfDay = "evening";
	}
	const { provider } = useProviderStore();
	return (
		<div className="text-white flex flex-row">
			<ProviderSidebar />

			<div className=" w-full p-8">
				<ProviderTopbar />

				<div className="grid md:grid-cols-2 gap-4 py-5">
					{/* Greet component */}
					<div className="p-5 rounded-3xl m-10 bg-secondary space-y-2 relative overflow-hidden h-40">
						<h1 className="md:text-3xl text-2xl">
							Good {timeOfDay},{" "}
							{provider?.[0]?.fullName?.split(" ")[0]}
						</h1>
						<p>
							"To cure sometimes, to relieve often, to comfort
							always." —{" "}
							<strong>Edward Livingston Trudeau</strong>
						</p>
					</div>

					{/* Upcoming appointments */}
					<UpcomingAppointments data={upcomingAppointmentsProvider} />

          {/* Viewed patients */}
          <ViewedPatients/>
				</div>
			</div>
		</div>
	);
};

export default ProviderDashboard;
