import { NavLink } from "react-router-dom";

const Sidebar = () => {
	return (
		<nav className="text-white p-3 flex flex-col gap-4 bg-primary w-[250px] h-full min-h-screen sticky">
			{/* sticky */}
			<div className="h-full w-full "></div>

			<div className="pb-5">HealthCentre</div>
			<NavLink
				to={"/user/dashboard"}
				className={({ isActive }) => {
					return isActive
						? "bg-secondary p-1 rounded-lg px-3 w-full"
						: "p-1 rounded-2xl px-3 w-full";
				}}
			>
				Dashboard
			</NavLink>

			<NavLink
				to={"/user/appointments"}
				className={({ isActive }) => {
					return isActive
						? "bg-secondary p-1 rounded-lg px-3 w-full"
						: "p-1 rounded-2xl px-3 w-full";
				}}
			>
				Appointments
			</NavLink>

			<NavLink
				to={"/user/records"}
				className={({ isActive }) => {
					return isActive
						? "bg-secondary p-1 rounded-lg px-3 w-full"
						: "p-1 rounded-2xl px-3 w-full";
				}}
			>
				Health records
			</NavLink>

			<NavLink
				to={"/user/telemedicine"}
				className={({ isActive }) => {
					return isActive
						? "bg-secondary p-1 rounded-lg px-3 w-full"
						: "p-1 rounded-2xl px-3 w-full";
				}}
			>
				Telemedicine
			</NavLink>

			<NavLink
				to={"/user/research"}
				className={({ isActive }) => {
					return isActive
						? "bg-secondary p-1 rounded-lg px-3 w-full"
						: "p-1 rounded-2xl px-3 w-full";
				}}
			>
				Earn from research
			</NavLink>
			<NavLink
				to={"/user/donations"}
				className={({ isActive }) => {
					return isActive
						? "bg-secondary p-1 rounded-lg px-3 w-full"
						: "p-1 rounded-2xl px-3 w-full";
				}}
			>
				Donate
			</NavLink>

			<NavLink
				to={"/user/settings"}
				className={({ isActive }) => {
					return isActive
						? "bg-secondary p-1 rounded-lg px-3 w-full"
						: "p-1 rounded-2xl px-3 w-full";
				}}
			>
				Settings
			</NavLink>
		</nav>
	);
};

export default Sidebar;
