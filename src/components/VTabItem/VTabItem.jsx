// Extends MenuItem

import React from "react";
import menu from "../../components/SideBar/SideBar.module.css";

export default function MenuItem({ icon, text, tab, setter }) {
	if (text === "divider") return <div className={menu.divider}></div>;

	return (
		<div className={menu.menuItem} onClick={() => setter(tab)}>
			<img src={icon} alt="" className={menu.icon} />
			<span>{text}</span>
		</div>
	);
}
