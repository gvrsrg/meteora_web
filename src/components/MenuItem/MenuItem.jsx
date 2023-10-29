import React from "react";
import { useNavigate } from "react-router-dom";
import menu from "../SideBar/SideBar.module.css";

export default function MenuItem({ icon, text, link }) {
    const navigate = useNavigate();

    if (text === "divider") return <div className={menu.divider}></div>;

    return (
        <div className={menu.menuItem} onClick={() => navigate(link)}>
            <img src={icon} alt="" className={menu.icon} />
            <span>{text}</span>
        </div>
    );
}
