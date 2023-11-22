import React from "react";
import { useNavigate } from "react-router-dom";
import side from "../SideBar/SideBar.module.css";
import account from "../../assets/ui/account.svg";

export default function UserItem({ icon, nickname, userId }) {
	const navigate = useNavigate();

	return (
		<div
			className={side.menuItem + " " + side.userItem}
			onClick={() => navigate("/u/" + userId)}
		>
			<img
                alt=""
				src={!icon ? account : icon}
				className={!icon ? side.icon : ""}
			/>
			<span>{nickname}</span>
		</div>
	);
}
