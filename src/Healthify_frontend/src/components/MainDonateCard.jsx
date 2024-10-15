const MainDonateCard = ({ data }) => {
	return (
		<div>
			<div className="bg-primary rounded-xl shadow-sm p-3 w-[500px]">
				<div>
					<img src={data.img} alt="" />
				</div>
				<div className="rounded-xl border border-gray-800 p-5">
					<div className="flex flex-row justify-between items-center py-3">
						<h4 className="font-semibold">{data.title}</h4>
						<button className="p-1.5 px-4 border-2 border-secondary rounded-3xl hover:rounded-lg duration-300">
							Donate
						</button>
					</div>

					<p>{data.details}</p>
					<div>
						<div className="flex flex-row gap-3 items-center text-sm py-3 justify-between">
							<div className="flex flex-col gap-1 items-center">
								Raised{" "}
								<span className="text-2xl">
									#{data.amountRaised}
								</span>
							</div>{" "}
							<div className="flex flex-col gap-1 items-center">
								Target{" "}
								<span className="font-semibold text-2xl">
									#{data.balance}
								</span>
							</div>{" "}
						</div>
						<div className="text-sm font-thin w-full">
							<p>By {data.requester}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainDonateCard;
