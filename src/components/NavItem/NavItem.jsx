import React from "react";
import item from "./NavItem.module.css";
import { useNavigate } from "react-router-dom";

export default function NavItem(props) {
	const navigate = useNavigate();

	return (
		<div
			className={item.item}
			onClick={(e) =>
				props.action
					? props.action()
					: navigate(props.link ? props.link : "/u/" + props.userId)
			}
		>
			<img src={props.icon} alt="" className={item.icon} />
			<span>{props.text || props.nickname}</span>
		</div>
	);
}
