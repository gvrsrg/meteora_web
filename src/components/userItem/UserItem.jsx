import React from "react";
import { useNavigate } from "react-router-dom";
import side from "../SideBar/SideBar.module.css";

export default function UserItem({ icon, nickname, userId }) {
    const navigate = useNavigate();

    return (
        <div
            className={side.menuItem + " " + side.userItem}
            onClick={() => navigate("/u/" + userId)}
        >
            <img src={icon} alt="" />
            <span>{nickname}</span>
        </div>
    );
}
