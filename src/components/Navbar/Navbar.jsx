import React from "react";
import bar from "./NavBar.module.css";
import NavItem from "../NavItem/NavItem";
import { navbarItems } from "../../js/config";

export default function Navbar({ client }) {
	navbarItems[3].action = () => alert("pisya") // кнопка "ещё"
	
	return (
		<div className={bar.navbar}>
			{navbarItems.map((item) => {
				if (item.tet === "user") item = client;

				return <NavItem key={Math.random()} {...item} />;
			})}
		</div>
	);
}