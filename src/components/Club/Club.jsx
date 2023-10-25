import React from "react";
import club from "./Club.module.css";
import { useNavigate } from "react-router-dom";

export default function Club({ icon, title, clubId }) {
	const navigate = useNavigate();

	return (
		<div className={club.club} onClick={(e) => navigate("/c/" + clubId)}>
			{icon !== "create" ? (
				<img src={icon} alt="" />
			) : (
				<div className={club.createClub}>
					<span>+</span>
				</div>
			)}

			<span>{title}</span>
		</div>
	);
}