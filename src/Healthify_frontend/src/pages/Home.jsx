import React from "react";
import Navbar from "../components/Navbar";
import hero from "/images/hero.jpg";
import { TypographyH1 } from "../components/Typography";

const Home = () => {
	return (
		<div className="text-white">
			<Navbar />

			{/* Hero */}
			<div className="flex flex-row gap-2 items-center md:p-10 p-7">
				<div className="flex flex-col flex-1">
					<TypographyH1 className=" leading-none my-10">
						Revolutionize Healthcare with Blockchain-Powered Records
					</TypographyH1>
					<div className="text-lg italic">
						Empower patients, healthcare providers, and researchers
						through secure and transparent blockchain technology.
					</div>
				</div>

				<div className="flex-1">
					<img src={hero} alt="" className="rounded-2xl" />
				</div>
			</div>
		</div>
	);
};

export default Home;
