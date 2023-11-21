import Club from "../ClubСard/ClubCard";
import { get_clubs } from "../../js/api";
import block from "./ClubsBlock.module.css";
import preloader from "../../assets/preloader.svg";
import React, { useState, useEffect } from "react";

export default function OneRow({ name, title }) {
	const [start, setStart] = useState(0);
	const [clubs, setClubs] = useState(false);

	useEffect(() => {
		get_clubs(name, start).then((clubs) => setClubs(clubs));
	}, [name, start]);

	return (
		<div className={block.block + " " + name}>
			<span className={block.title}>{title}</span>
			<div className={block.wrapper}>
				<div className={block.list + " " + name}>
					{!clubs ? (
						<img
							alt=""
							src={preloader}
							className={block.preloader}
						/>
					) : typeof clubs === "string" ? (
						<div className={block.placeholder}> {clubs} </div>
					) : (
						clubs.map((club) => (
							<Club key={club.clubId} {...club}/>
						))
					)}

                    <div className="observer">...</div>
				</div>
			</div>
		</div>
	);
}
