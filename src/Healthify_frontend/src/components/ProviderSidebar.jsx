import { NavLink } from "react-router-dom";

const ProviderSidebar = () => {
	return (
		<nav className="text-white p-3 flex flex-col gap-4 bg-primary w-[250px] h-full min-h-screen sticky">
			{/* sticky */}
			<div className="h-full w-full "></div>

			<div className="pb-5">HealthCentre</div>
			<NavLink
				to={"/provider/dashboard"}
				className={({ isActive }) => {
					return isActive
						? "bg-secondary p-1 rounded-lg px-3 w-full"
						: "p-1 rounded-2xl px-3 w-full hover:opacity-65";
				}}
			>
				Dashboard
			</NavLink>

			<NavLink
				to={"/provider/appointments"}
				className={({ isActive }) => {
					return isActive
						? "bg-secondary p-1 rounded-lg px-3 w-full"
						: "p-1 rounded-2xl px-3 w-full hover:opacity-65 ";
				}}
			>
				Appointments
			</NavLink>

			<NavLink
				to={"/provider/view-patient"}
				className={({ isActive }) => {
					return isActive
						? "bg-secondary p-1 rounded-lg px-3 w-full"
						: "p-1 rounded-2xl px-3 w-full hover:opacity-65";
				}}
			>
				View Patients
			</NavLink>

			<NavLink
				to={"/provider/telemedicine"}
				className={({ isActive }) => {
					return isActive
						? "bg-secondary p-1 rounded-lg px-3 w-full"
						: "p-1 rounded-2xl px-3 w-full hover:opacity-65 ";
				}}
			>
				Telemedicine
			</NavLink>
			<NavLink
				to={"/user/donations"}
				className={({ isActive }) => {
					return isActive
						? "bg-secondary p-1 rounded-lg px-3 w-full"
						: "p-1 rounded-2xl px-3 w-full hover:opacity-65";
				}}
			>
				Donate
			</NavLink>

			<NavLink
				to={"/provider/settings"}
				className={({ isActive }) => {
					return isActive
						? "bg-secondary p-1 rounded-lg px-3 w-full"
						: "p-1 rounded-2xl px-3 w-full hover:opacity-65";
				}}
			>
				Settings
			</NavLink>
		</nav>
	);
};

export default ProviderSidebar;
