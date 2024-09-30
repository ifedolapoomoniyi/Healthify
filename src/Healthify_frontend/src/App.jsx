import { Healthify_backend } from "declarations/Healthify_backend";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateAcc from "./pages/auth/CreateAcc";


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
					<Route path='/auth/signup' element={<CreateAcc />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
