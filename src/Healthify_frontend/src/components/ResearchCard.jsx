import { TypographyH6 } from "./Typography";

const ResearchCard = () => {
	return (
		<div className="bg-primary p-5 rounded-xl">
			<TypographyH6 className={"pb-4"}>Earn from research</TypographyH6>

			<div>
				<div className="flex flex-row gap-3">
					<div className="rounded-xl p-3 bg-black border border-gray-700">
						<div className="py-2 flex flex-row justify-between items-center">
							<h5 className="text-xl font-semibold">
								{" "}
								Sleep deprivation
							</h5>
							<div>
								<button className="py-1 px-2 rounded-lg bg-primary text-sm border border-gray-700 font-light">
									View More
								</button>
							</div>{" "}
						</div>
						<div className="text-sm text-gray-400">
							Sleep deprivation affects cognitive function, mood,
							and overall health, leading to decreased
							productivity and increased risk of chronic diseases.
						</div>
					</div>

					<div className="rounded-xl p-3 bg-black border border-gray-700">
          <div className="py-2 flex flex-row justify-between items-center">
							<h5 className="text-xl font-semibold">
								Effects of Cortisol
							</h5>
							<div>
								<button className="py-1 px-2 rounded-lg bg-primary text-sm border border-gray-700 font-light mr-auto">
									View More
								</button>
							</div>{" "}
						</div>
						<div className="text-sm text-gray-400">
							Prolonged Cortisol exposure affects cognitive function, mood,
							and overall health, leading to decreased
							productivity and increased risk of chronic diseases.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResearchCard;
