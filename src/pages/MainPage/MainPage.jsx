import index from "./MainPage.module.css";
import { get_client } from "../../js/api";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/SideBar/SideBar";
import GridBlock from "../../components/GridBlock/GridBlock";
import Loading from "../../components/Loading/LoadingScreen";
import ClubsBlock from "../../components/ClubsBlock/ClubsBlock";

export default function Index() {
	const navigate = useNavigate();
	const [client, setClient] = useState(false);

	// Фетчим клиент

	useEffect(() => {
		get_client().then((client) => setClient(client));
	}, []);

	// Если клиент не загрузился, перенаправляем

	setTimeout(() => client && navigate("/hello"), 2500);

	if (client) return <Loading />;

	return (
		<div className="app">
			<Header search={true} />
			<Navbar user={client} />

			<main className={index.scrollArea}>
				<SideBar user={client} />
				<div className={index.container}>
					<ClubsBlock name="my" title="Мои клубы" createClub={true} />
					<ClubsBlock name="popular" title="Поплуярные клубы" />
					<GridBlock name="board" title="Вам может быть интересно" />
				</div>
			</main>
		</div>
	);
}
