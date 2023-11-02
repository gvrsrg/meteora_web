import React from "react";
import Club from "../Club/Club";
import _block from "./OneRow.module.css";
import preview from "../../assets/images/preview.jpg";

// Сделать модальное окно для создания клуба

export default function OneRow(props) {
    return (
        <div className={_block.block + " " + props.name}>
            <span className={_block.title}>{props.title}</span>
            <div className={_block.wrapper}>
                <div className={_block.list + " " + props.name}>
                    {props.createClub && (
                        <Club
                            icon="create"
                            title="Создать клуб"
                            clubId="create+club"
                        />
                    )}
                    <Club
                        icon={preview}
                        clubId="123456"
                        title="Название клуба"
                    />
                    <Club
                        icon={preview}
                        clubId="123456"
                        title="Название клуба"
                    />
                </div>
            </div>
        </div>
    );
}
