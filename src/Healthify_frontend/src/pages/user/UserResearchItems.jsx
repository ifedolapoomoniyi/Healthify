import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import TopBar from "../../components/TopBar";
import { TypographyH5 } from "../../components/Typography";
import { Button } from "../../components/ui/Button";

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

const UserResearchItems = () => {
	const { title } = useParams();
	const research = researchList.find(
		(research) => research.title.split(" ").join("-") === title
	);
	if (!research) return <div>Research not found</div>;
	return (
		<div className="flex flex-row text-white">
			<Sidebar />

			<div className="w-full p-5">
				<TopBar />

				<div className="mt-10">
					<div className="m-auto max-w-[800px] bg-primary rounded-2xl p-6">
						<div className="flex flex-row gap-3 justify-between items-center mb-4">
							<TypographyH5 className={"py-5"}>
								{research.title}
							</TypographyH5>
							<p>
								Reward:{" "}
								<span className="text-secondary font-semibold text-lg">
									{research.reward} Tokens
								</span>
							</p>
						</div>
						<p  className="mb-3">{research.description}</p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Possimus cupiditate molestiae culpa odio
							iusto, quae cumque autem vero aperiam tenetur sint
							vel, nam id incidunt quasi repellendus esse
							doloribus quidem libero et sed consectetur!
							Consectetur necessitatibus doloremque incidunt.
							Aperiam culpa, laudantium saepe mollitia doloribus
							laborum reiciendis nisi excepturi nihil, distinctio
							tempore exercitationem atque nulla voluptas nostrum
							aliquam corporis quaerat ad deleniti harum. Expedita
							aut fugit delectus molestias doloremque natus at
							tempore labore, explicabo consequuntur ratione culpa
							reprehenderit dolorem earum cupiditate atque eos
							enim magni quae veritatis. Excepturi expedita
							sapiente enim velit eaque animi ipsa repellendus
							deserunt voluptatum dicta aperiam eveniet, minima
							laborum? Quis aliquam, magni dolore expedita
							molestiae quos facere laudantium. Nulla dignissimos
							perspiciatis voluptas consectetur error doloremque
							tempore temporibus mollitia. Omnis repellendus,
							obcaecati, sit laudantium sint consequatur,
							temporibus possimus enim accusantium nostrum aliquid
							at debitis recusandae doloremque neque nemo?
							Pariatur, cum deleniti. Exercitationem esse
							reiciendis doloremque excepturi dolorem expedita
							autem cupiditate ipsa accusantium, numquam eligendi,
							vitae eius. Libero quos soluta id dignissimos
							corporis quae reiciendis quis explicabo nam quam,
							unde eligendi aliquid est similique blanditiis
							labore? Perspiciatis quas natus ab dolore ullam
							eligendi dolorum in pariatur id nesciunt, eveniet
							laboriosam necessitatibus nobis aperiam voluptates
							tempora, nihil, tenetur voluptatem accusamus.
						</p>

            <Button className="mt-5 text-white hover:bg-green-700" variant={"secondary"}>Join Research</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserResearchItems;
