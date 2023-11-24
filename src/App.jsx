import React from "react";
import Error from "./pages/ErrorPage/ErrorPage";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import ClubPage from "./pages/ClubPage/ClubPage";
import PostPage from "./pages/PostPage/PostPage";
import UserPage from "./pages/UserPage/UserPage";
import Settings from "./pages/SettingsPage/SettingsPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="*" element={<Error code="404" />} />
			<Route path="/hello" element={<WelcomePage />} />
			<Route path="/settings" element={<Settings />} />

			<Route path="/c/:clubId" element={<ClubPage />} />
			<Route path="/p/:postId" element={<PostPage />} />
			<Route path="/u/:userId" element={<UserPage />} />

			{ /* Формы авторизации */ }

			<Route path="/club" element={<AuthPage mode="club" />} />
			<Route path="/login" element={<AuthPage mode="login" />} />
			<Route path="/restore" element={<AuthPage mode="restore" />} />
			<Route path="/register" element={<AuthPage mode="register" />} />
		</Routes>
	);
}