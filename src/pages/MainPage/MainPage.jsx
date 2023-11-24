import index from "./MainPage.module.css";
import { get_client } from "../../js/api";
import { useNavigate } from "react-router-dom";
import { mainpageItems } from "../../js/config";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/SideBar/SideBar";
import Loading from "../../components/Loading/LoadingScreen";
import PostsBlock from "../../components/PostsBlock/PostsBlock";
import ClubsBlock from "../../components/ClubsBlock/ClubsBlock";

export default function Index() {
	const navigate = useNavigate();
	const [client, setClient] = useState(false);

	// Если клиента нет - перенаправляем
	// иначе - устанавливаем клиент

	useEffect(() => {
		get_client().then((client) => {
			!client ? navigate("/hello") : setClient(client);
		});
	}, []);

	// Пока клиент не загружен - показываем экран загрузки

	if (!client) return <Loading />;

	return (
		<div className="app">
			<Header search={true} />

			<Navbar user={client} />

			<main className={index.scrollArea}>
				<SideBar list={mainpageItems} user={client} />

				<div className={index.container}>
					<ClubsBlock name="my" title="Мои клубы" createClub={true} />
					<ClubsBlock name="popular" title="Поплуярные клубы" />

					<PostsBlock title="Вам может быть интересно" />
				</div>
			</main>
		</div>
	);
}
