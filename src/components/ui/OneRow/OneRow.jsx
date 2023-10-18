import React from "react";
import orow from "./OneRow.module.css";

// Сделать модальное окно для создания клуба

export default function OneRow(props) {
  const olist = `${orow["row-list"]} ${props.name}`;
  const block = `ui-block ${orow["row-block"]} ${props.name}`;

  return (
    <div className={block}>
      <span className={orow["row-title"]}>{props.title}</span>
      <div className={orow["list-tech"]}>
        {props.createClub ? (
          <div className={orow["create-club"]} onClick={(e) => {}}>
            Создать клуб
          </div>
        ) : null}
        <div className={olist}>Objects list</div>
      </div>
    </div>
  );
}