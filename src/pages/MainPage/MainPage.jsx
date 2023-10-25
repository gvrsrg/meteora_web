import get_client from "../../js/api";
import index from "./MainPage.module.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import OneRow from "../../components/OneRow/OneRow";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/SideBar/SideBar";
import GridBlock from "../../components/GridBlock/GridBlock";
import Loading from "../../components/Loading/LoadingScreen";

export default function Index() {
	const navigate = useNavigate();
	const [client, setClient] = useState(false);

	// Фетчим клиент

	useEffect(() => {
		get_client().then((client) => setClient(client));
	}, []);

	// Если клиент не загрузился, перенаправляем

	setTimeout(() => (client && navigate("/hello")), 2500);

	if (client) return <Loading />;

	return (
		<div className="app">
			<Header search={true} />

			<Navbar user={client} />

			<main className={index.scrollArea}>
				<SideBar user={client} />

				<div className={index.container}>
					<OneRow
						name="myClubs"
						title="Мои клубы"
						createClub={true}
					/>
					
					<OneRow name="popularClubs" title="Поплуярные клубы" />

					<GridBlock name="board" title="Вам может быть интересно" />
				</div>
			</main>
		</div>
	);
}