import React from "react";
import side from "./SideBar.module.css";
import MenuItem from "../MenuItem/MenuItem";
import UserItem from "../UserItem/UserItem";
import { sideItems } from "../../js/config";

export default function SideBar(props) {
	if (!sideItems) return null;

	return (
		<aside className={side.sidebar}>
			{props.user && <UserItem {...props.user} />}

			{sideItems.map((item) => (
				<MenuItem key={Math.random()} {...item} />
			))}
		</aside>
	);
}