import React from "react";
import side from "./SideBar.module.css";
import UserItem from "../userItem/UserItem";
import MenuItem from "../MenuItem/MenuItem";

export default function SideBar({ list, user }) {
	if (!list) return null;

	if (user) {
		if (user.developer !== true)
			list.forEach((item) =>
				item.link === "/dev" ? list.pop(item) : false
			);
	}

	return (
		<aside className={side.sidebar}>
			{user && <UserItem {...user} />}

			{list.map((item, i) => (
				<MenuItem key={i} {...item} />
			))}
		</aside>
	);
}
