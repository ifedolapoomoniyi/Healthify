import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { FaBell } from "react-icons/fa";
import { Button } from "./ui/Button";
import { useLocation } from "react-router-dom";
import { useProviderStore } from "../lib/store";
import { useEffect } from "react";
import { Healthify_backend } from "../../../declarations/Healthify_backend";

const ProviderTopbar = () => {
	const location = useLocation();
	const dashRoute = location.pathname.split("/")[2];
	const providerId = JSON.parse(localStorage.getItem("user")).providerId;

	const { provider, setProvider } = useProviderStore();
	useEffect(() => {
		Healthify_backend.getProvider(providerId).then((provider) => {
			setProvider(provider);
		});
	}, []);

	return (
		<div className="flex flex-row gap-2 w-full justify-between items-center">
			<h2 className="font-semibold text-xl capitalize">{dashRoute}</h2>
			<div>
				<input type="text" />
				<button></button>
			</div>

			<div className="flex flex-row gap-2 items-center">
				<div className="flex flex-row gap-2 items-center">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback className={"bg-secondary"}>
							I
						</AvatarFallback>
					</Avatar>

					<div>{provider?.[0]?.fullName}</div>
				</div>
				<div>
					<FaBell />
				</div>
			</div>

			<Button variant={"secondary"} className="text-white rounded-2xl">
				Connect Wallet
			</Button>
		</div>
	);
};

export default ProviderTopbar;
