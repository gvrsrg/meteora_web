import React from "react";
import item from "./NavItem.module.css";
import { useNavigate } from "react-router-dom";

export default function NavItem(props) {
	const navigate = useNavigate();

	return (
		<div
			className={item.item}
			onClick={() =>
				props.action
					? props.action()
					: navigate(props.link ? props.link : "/u/" + props.userId)
			}
		>
			<img
                alt=""
				src={props.icon}
				className={props.nickname ? item.avatar : item.icon}
			/>
			
            <span>{props.text || props.nickname}</span>
		</div>
	);
}
