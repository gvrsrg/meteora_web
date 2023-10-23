import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import MainPage from "./pages/MainPage/MainPage";
import Error from "./pages/ErrorPage/ErrorPage";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/hello" element={<WelcomePage />} />
			<Route path="*" element={<Error code="404" />} />
		</Routes>
	);
}