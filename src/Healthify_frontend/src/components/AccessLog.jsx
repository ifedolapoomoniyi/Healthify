import { useEffect, useState } from "react";
import { Healthify_backend } from "../../../declarations/Healthify_backend";
import { useUserStore } from "../lib/store";
import Loading from "./Loading";

const AccessLog = () => {
	const [loading, setLoading] = useState(false);
	const { user } = useUserStore();
	const [accessLog, setAccessLog] = useState([]);
	const [providerDetails, setProviderDetails] = useState({}); // Store provider details

	// Fetch provider details and store them in state
	const getProviderDetails = (id) => {
		// Check if we already have the details cached in the state
		if (providerDetails[id]) {
			return providerDetails[id]; // Return cached provider details if available
		}

		// If not cached, fetch from backend
		Healthify_backend.getProvider(id).then((data) => {
			setProviderDetails((prevDetails) => ({
				...prevDetails,
				[id]: {
					fullName: data[0].fullName,
					speciality: data[0].speciality,
				},
			}));
		});
	};

	useEffect(() => {
		if (user && user[0]?.patientId) {
			setLoading(true);
			Healthify_backend.getPatientAccessLogs(user[0].patientId).then(
				(data) => {
					if (data && data.length > 0) {
						setAccessLog(data);
					} else {
						setAccessLog([]);
					}
					setLoading(false);
				}
			);
		}
	}, [user]);

	if (loading) {
		return <Loading />;
	}

	return (
		<div className="p-5 rounded-xl bg-primary">
			<h3 className="font-semibold">Access Log <span className="text-sm text-gray-400">(Most recent 5)</span></h3>
			<div className="">
				{accessLog.length > 0 ? (
					accessLog[0].viewedProviders.toReversed().slice(0,5).map((log, index) => (
						<div
							key={index}
							className="px-4 py-3 rounded-lg bg-black my-2"
						>
							{/* Display cached details or loading */}
							<div>
								<div>
									{/* Check if provider details are available or show 'Loading...' */}
									{providerDetails[log.providerId]
										?.fullName || "Loading..."}
								</div>
								<div className="text-xs">
									{/* Display speciality if available */}
									{providerDetails[log.providerId]
										?.speciality || "Loading..."}
								</div>
							</div>
							{/* Trigger fetch if not available */}
							{!providerDetails[log.providerId] &&
								getProviderDetails(log.providerId)}
							<p className="text-xs text-gray-400">
								<span className="text-sm font-thin">Accessed on:</span> {log.time}
							</p>
						</div>
					))
				) : (
					<p className="p-5 text-sm">No access logs found</p>
				)}
			</div>
		</div>
	);
};

export default AccessLog;
