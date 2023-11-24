// Extends MainPage, AuthPage :: Submit

import { get_client } from "../../js/api";
import ui from "./SettingsPage.module.css";
import { useNavigate } from "react-router-dom";
import { settingsItems } from "../../js/config";
import form from "../AuthPage/AuthPage.module.css";
import { React, useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import VTabBar from "../../components/VTabBar/VTabBar";
import index from "../../pages/MainPage/MainPage.module.css";

export default function Settings() {
	const navigate = useNavigate();

	const [tab, setTab] = useState("account");
	const [client, setClient] = useState(false);

	useEffect(() => {
		get_client().then((client) => {
			!client ? navigate("/hello") : setClient(client);
		});
	}, []);

	return (
		<div className="app">
			<Header search={false} />

			<main className={index.scrollArea}>
				<VTabBar list={settingsItems} setter={setTab} />

				<div className={index.container}>
                    <div
                        className={ui.tab}
                        style={
                            tab === "account"
                                ? { display: "flex" }
                                : { display: "none" }
                        }
                    >
						<div className={ui.title}>Настройки аккаунта</div>

						<div className={ui.item}>
							<span>Аккаунт</span>

							<div className={ui.user}>
								<img src={client.icon} alt="" />

								<span>{client.nickname}</span>
							</div>
						</div>

                        <div className={ui.item}>
							<span>Язык записей</span>
							<select name="lang" id=""></select>
						</div>

						<div className={ui.item}>
							<span>Двухэтапная ау-ция</span>
							<input type="checkbox" name="twoFAU" id="TWF" />
							<label for="TWF"></label>
						</div>

						<div
							className={ui.item + " " + ui.__red}
							style={{ gridGap: "15px" }}
						>
							<div className={ui.button}>Выйти</div>

							<div className={ui.button}>Удалить аккаунт</div>

							<div className={ui.button}>Сменить пароль</div>
						</div>
					</div>
                    
                    <div
						className={ui.tab}
						style={
							tab === "home"
								? { display: "flex" }
								: { display: "none" }
						}
					>
						<div className={ui.title}>Общие настройки</div>

                        <div className={ui.item}>
							<span>Тема</span>
							<select name="theme" id=""></select>
						</div>

                        <div className={ui.item}>
							<span>Тема</span>
							<select name="theme" id=""></select>
						</div>

                        <div className={ui.item}>
							<span>Тема</span>
							<select name="theme" id=""></select>
						</div>
					</div>

					<div
						className={ui.tab}
						style={
							tab === "subscribe"
								? { display: "flex" }
								: { display: "none" }
						}
					>
						Meteora+ Settings & Wallet
					</div>

					<div
						className={ui.tab}
						style={
							tab === "favorites"
								? { display: "flex" }
								: { display: "none" }
						}
					>
						Under construction
					</div>

					<div className={form.submit + " " + ui.submit}>
						Сохранить
					</div>
				</div>
			</main>
		</div>
	);
}
