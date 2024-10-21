import ProviderSidebar from "../../components/ProviderSidebar";
import ProviderTopbar from "../../components/ProviderTopbar";
import ViewedPatients from "../../components/ViewedPatients";
import FindPatient from "../../components/FindPatient";

const ViewPatients = () => {
	return (
		<div className="flex flex-row text-white">
			<ProviderSidebar />

			<div className="w-full p-5">
				<ProviderTopbar />

				<div className="grid grid-rows-2 md:grid-cols-2 gap-5">
					<FindPatient />

					<ViewedPatients />
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default ViewPatients;
