import React from "react";
import club from "./ClubCard.module.css";
import { useNavigate } from "react-router-dom";

export default function Club({ icon, title, clubId }) {
	const navigate = useNavigate();

	return (
		<div className={club.club} onClick={(e) => navigate("/c/" + clubId)}>
			<img src={icon} alt="" />
			<span>{title}</span>
		</div>
	);
}
