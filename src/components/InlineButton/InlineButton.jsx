import React from "react";
import btn from "./InlineButton.module.css";
import like from "../../assets/post/like_fav.svg";
import unlike from "../../assets/post/like_unfav.svg";
import comments from "../../assets/post/comments.svg";

export default function InlineButton({ icon, val }) {
	switch (icon) {
		case "like": icon = like; break;
		case "unlike": icon = unlike; break;
		case "comment": icon = comments; break;
		default: icon = like; break;
	}

	return (
		<div className={btn.button}>
			<img src={icon} alt="" />
			<div className={btn.val}>{val}</div>
		</div>
	);
}
