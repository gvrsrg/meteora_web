import React from "react";
import _block from "./OneRow.module.css";

// Сделать модальное окно для создания клуба

export default function OneRow(props) {
	return (
		<div className={_block.block + " " + props.name}>
			<span className={_block.title}>{props.title}</span>

			<div className={_block.wrapper}>
				{props.createClub ? (
					<div className={_block.createClub} onClick={(e) => {}}>
						Создать клуб
					</div>
				) : null}

				<div className={_block.list + " " + props.name}>
					Objects list
				</div>
			</div>
		</div>
	);
}