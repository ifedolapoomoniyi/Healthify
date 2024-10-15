import { Link } from "react-router-dom";
import { TypographyH6 } from "./Typography";
import { FaDollarSign } from "react-icons/fa";

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

const ResearchCard = () => {
	return (
		<div className="bg-primary p-5 rounded-xl">
			<TypographyH6 className={"pb-4 flex flex-row gap-2 items-center"}>
				Earn from research <FaDollarSign className="text-secondary" />
			</TypographyH6>

			<div>
				<div className="flex flex-row gap-3">
					{researchList.slice(0, 2).map((research, index) => (
						<div
							key={index}
							className="rounded-xl p-3 bg-black border border-gray-700"
						>
							<div className="py-2 flex flex-row justify-between items-center">
								<h5 className="text-xl font-semibold">
									{research.title}
								</h5>
								<div>
									<Link
										to={"/user/research/" + research.title.split(" ").join("-")}
										className="py-1 px-2 rounded-lg bg-primary text-sm border border-gray-700 font-light block"
									>
										View More
									</Link>
								</div>{" "}
							</div>
							<div className="text-sm text-gray-400">
								{research.description}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ResearchCard;
