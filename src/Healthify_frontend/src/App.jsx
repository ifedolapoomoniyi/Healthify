import { Healthify_backend } from "declarations/Healthify_backend";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateAcc from "./pages/auth/CreateAcc";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/user/Dashboard";
import UserResearch from "./pages/user/UserResearch";
import UserResearchItems from "./pages/user/UserResearchItems";
import UserRecords from "./pages/user/UserRecords";
import Donations from "./pages/user/Donations";
import JoinAs from "./pages/JoinAs";

function App() {
	// const [greeting, setGreeting] = useState("");

	// function handleSubmit(event) {
	// 	event.preventDefault();
	// 	const name = event.target.elements.name.value;
	//   console.log(name)
	// 	Healthify_backend.greet(name).then((greeting) => {
	// 		setGreeting(greeting);
	// 	});
	// 	return false;
	// }
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />

					{/* auth routes */}
					<Route path="/auth" element={<JoinAs />} />
					<Route path="/auth/signup" element={<CreateAcc />} />
					<Route path="auth/signup/:role" element={<CreateAcc />} />
					<Route path="/auth/login" element={<Login />} />
					<Route path="/auth/login/:role" element={<Login />} />

					{/* user routes */}
					<Route path="/user/dashboard" element={<Dashboard />} />
					<Route path="/user/research" element={<UserResearch />} />
					<Route
						path="user/research/:title"
						element={<UserResearchItems />}
					/>
					<Route path="user/records" element={<UserRecords />} />
				<Route path="user/donations" element={<Donations />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
