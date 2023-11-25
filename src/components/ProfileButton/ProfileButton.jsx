import React from "react";
import btn from "./ProfileButton.module.css";

export default function ProfileButton(props) {
	if (props.subItem)
		return (
			<div
                onClick={(e) => props.onclick()}
                className={btn.button + " " + btn.subItem}
			>
				<span>{props.value}</span>
				<span>{props.text}</span>
			</div>
		);

	return (
		<div
            onClick={(e) => props.onclick()}
			className={props.border ? btn.borderButton : btn.button}
		>
			<img src={props.image} alt="" />
			<span>{props.text}</span>
		</div>
	);
}
