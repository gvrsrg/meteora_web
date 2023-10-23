import React from "react";
import menu from "../SideBar/SideBar.module.css";

export default function MenuItem({ icon, text, link }) {
	const to = () => (window.location.href = link);

	const item = `${menu.menuItem} menuItem`;
	const mdiv = `${menu.divider} divider`;

	if (text === "divider") return <div className={mdiv}></div>;

	return (
		<div className={item} onClick={(e) => to()}>
			<img src={icon} alt="" className="icon" />
			<span>{text}</span>
		</div>
	);
}