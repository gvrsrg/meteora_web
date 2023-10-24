import React from "react";
import bg from "../../assets/images/bg.jpeg";
import { useNavigate } from "react-router-dom";
import welcome from "./WelcomePage.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import header from "../../components/Header/Header.module.css";

export default function Welcome() {
	const navigate = useNavigate();

	return (
		<div className="fullScreen">
			<img src={bg} alt="" className={welcome.background} />

			<Header className={header.header__alt} auth={true} />

			<main className={welcome.screen}>
				<div className={welcome.title}>
					Meteora - здесь вам всегда рады
				</div>

				<div className={welcome.subtitle}>
					Добро пожаловать туда, где люди важнее всего
				</div>

				<div
					className={welcome.startButton}
					onClick={(e) => navigate("/login")}
				>
					Начните сейчас
				</div>
			</main>

			<Footer />
		</div>
	);
}