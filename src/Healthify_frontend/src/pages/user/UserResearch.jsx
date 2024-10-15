import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import TopBar from "../../components/TopBar";
import { TypographyH6 } from "../../components/Typography";

const researchList = [
	{
		title: "Health Disparity and Public Health",
		description:
			"Studying how factors like income, education, and living conditions affect health outcomes, particularly in underserved communities",
		reward: 150,
	},
	{
		title: "Sleep deprivation",
		description:
			"Sleep deprivation affects cognitive function, mood, and overall health, leading to decreased productivity and increased risk of chronic diseases.",
		reward: 100,
	},
	{
		title: "Effects of Cortisol",
		description:
			"Prolonged Cortisol exposure affects cognitive function, mood, and overall health, leading to decreased productivity and increased risk of chronic diseases.",
		reward: 300,
	},
	{
		title: "Stem Cell Research",
		description:
			" Exploring the use of stem cells to regenerate damaged tissues, particularly in heart disease, spinal cord injuries, and diabetes.",
		reward: 200,
	},
];

const UserResearch = () => {
	return (
		<div className="flex flex-row">
			<Sidebar />

			<div className="w-full text-white p-5">
				<TopBar />

				<div className="max-w-[500px] bg-primary rounded-xl p-5 my-5 m-auto">
					<TypographyH6>Ongoing research</TypographyH6>

					{/* research cards */}
					{researchList.map((research, index) => (
						<Link
              to={research.title.split(" ").join("-")}
							key={index}
							className="bg-primary p-5 rounded-xl my-4 border border-gray-800 block"
						>
							<div className="flex flex-row justify-between mb-3 items-center">
								<h6 className="text-lg">{research.title}</h6>
								<div className="text-sm">
									Reward:{" "}
									<span className="text-secondary font-semibold">
										{research.reward} Tokens
									</span>
								</div>
							</div>
							<p className="text-gray-400">
								{research.description}
							</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default UserResearch;
