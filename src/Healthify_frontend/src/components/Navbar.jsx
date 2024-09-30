import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="flex flex-row justify-between items-center rounded-3xl bg-primary text-white m-4 p-2 text-xl">
			<div className="flex flex-row gap-2 bg-black rounded-3xl">
				<NavLink></NavLink>
				<NavLink>Healthify</NavLink>
			</div>

			<div className="p-3 px-6 rounded-2xl bg-black space-x-10">
				<NavLink
					to={"/"}
					className={({ isActive }) => {
						return isActive
							? "bg-secondary p-1 rounded-2xl px-3"
							: "p-1 rounded-2xl px-3";
					}}
				>
					Home
				</NavLink>
				<NavLink>Benefits</NavLink>
				<NavLink>Services</NavLink>
				<NavLink>About</NavLink>
			</div>

			<div>
				<NavLink to={'/auth/signup'} className="p-2 rounded-2xl bg-black">
					Get Started
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
