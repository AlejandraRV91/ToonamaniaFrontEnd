import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Index from "./components/Index";
import Create from "./components/CreateNewCharacter";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/create" element={<Create />} />
					<Route path="/index" element={<Index />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
