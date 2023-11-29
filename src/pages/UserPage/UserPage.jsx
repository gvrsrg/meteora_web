// Extends .scrollArea from MainPage

import user from "./UserPage.module.css";
import { get_client, get_uinfo } from "../../js/api";
import add from "../../assets/ui/add.svg";
import edit from "../../assets/ui/edit.svg";
import chat from "../../assets/ui/chat.svg";
import { useParams } from "react-router-dom";
import { React, useState, useEffect } from "react";
import preloader from "../../assets/preloader.svg";
import Header from "../../components/Header/Header";
import preview from "../../assets/images/preview.jpg";
import ProfileButton from "../../components/ProfileButton/ProfileButton";

export default function UserPage() {
	const { userId } = useParams();

	const [tab, setTab] = useState("bio");
	const [bio, setBio] = useState(false);
	const [info, setInfo] = useState(false);
	const [client, setClient] = useState(false);

	useEffect(() => {
		get_client().then((_client) => setClient(_client));
		get_uinfo(userId, "bio").then((_bio) => setBio(_bio));
		get_uinfo(userId, "required").then((_info) => setInfo(_info));
	}, [userId]);

	return (
		<div className="app">
			<Header search={true} />

			<img src={preview} alt="" className={user.pbg} />

			<div className={user.profile}>
				<div className={user.general}>
					<div className={user.generalWrapper}>
						<div className={user.iconComplex}>
							<img src="" alt="" className={user.pframe} />

							<img
								alt=""
								className={user.icon}
								src={
									info.userProfile &&
									info.userProfile.icon !== "*"
										? info.userProfile.icon
										: preview
								}
							/>
						</div>

						<div className={user.profileInfo}>
							<div className={user.nickname}>
								{info.userProfile
									? info.userProfile.nickname
									: ""}
							</div>

							{!info.userProfile ? (
								""
							) : info.userProfile.userId === client.userId ? (
								<div className={user.btnPanel}>
									<ProfileButton
										image={edit}
										border={true}
										text="Редактировать"
										onclick={() => alert("popa")}
									/>
								</div>
							) : (
								<div className={user.btnPanel}>
									<ProfileButton
										image={add}
										border={true}
										text="Подписаться"
										onclick={() => alert("popa")}
									/>

									<ProfileButton
										image={chat}
										border={true}
										text="Написать"
										onclick={() => alert("popa")}
									/>
								</div>
							)}
						</div>
					</div>

					{
						// Данные о подписчиках и подписках
					}

					<div className={user.subIPanel}>
						<ProfileButton
							value="430"
							subItem={true}
							text="Подписчики"
							onclick={() => alert("pisya")}
						/>

						<ProfileButton
							value="402"
							subItem={true}
							text="Подписки"
							onclick={() => alert("pisya")}
						/>
					</div>
				</div>

				<div className={user.tabhost}>2</div>
			</div>
		</div>
	);
}
