import React from "react";
import _block from "./OneRow.module.css";

// Сделать модальное окно для создания клуба

export default function OneRow(props) {
	const listName = `${_block.list} ${props.name}`;
	const blockName = `block ${_block.block} ${props.name}`;

	return (
		<div className={blockName}>
			<span className={_block.title}>{props.title}</span>
			<div className={_block.wrapper}>
				{props.createClub ? (
					<div className={_block.createClub} onClick={(e) => {}}>
						Создать клуб
					</div>
				) : null}
				<div className={listName}>Objects list</div>
			</div>
		</div>
	);
}