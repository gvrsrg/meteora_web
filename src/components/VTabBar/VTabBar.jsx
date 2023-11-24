// Extends SideBar

import React from "react";
import VTabItem from "../../components/VTabItem/VTabItem";
import side from "../../components/SideBar/SideBar.module.css";

export default function SideBar({ list, setter }) {
	if (!list) return null;

	return (
		<aside className={side.sidebar}>
			{list.map((item, i) => (
				<VTabItem key={i} {...item} setter={setter} />
			))}
		</aside>
	);
}
