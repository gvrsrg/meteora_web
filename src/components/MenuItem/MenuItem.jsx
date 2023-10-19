import React from "react";
import menu from "../SideBar/SideBar.module.css";

export default function MenuItem({ icon, text, link }) {
  const to = () => (window.location.href = link);

  const mit = `${menu["menu-item"]} menu-item`;
  const mdiv = `${menu["menu-divider"]} menu-divider`;

  if (text === "divider") return <div className={mdiv}></div>;

  return (
    <div className={mit} onClick={(e) => to()}>
      <img src={icon} alt="" className="ui-icon" />
      <span>{text}</span>
    </div>
  );
}