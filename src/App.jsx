import WelcomePage from "./pages/WelcomePage/WelcomePage";
import MainPage from "./pages/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import "./styles/themes/dark.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/greating" element={<WelcomePage />} />
    </Routes>
  );
}