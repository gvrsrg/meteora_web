import React from "react";
import bar from "./NavBar.module.css";
import NavItem from "../NavItem/NavItem";
import { navbarItems } from "../../js/config";

export default function Navbar({ user }) {
    navbarItems[3].action = () => alert("pisya"); // кнопка "ещё"

    return (
        <div className={bar.navbar}>
            {navbarItems.map((item, i) => {
                if (item.text === "user") item = user;
                return <NavItem key={i} {...item} />;
            })}
        </div>
    );
}
