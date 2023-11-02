import React from "react";
import grid from "./GridBlock.module.css";

export default function GridBlock(props) {
    return (
        <div className={grid.block + " " + props.name}>
            <div className={grid.title}>{props.title}</div>
            <div className={grid.list + " " + props.name}>Objects list</div>
        </div>
    );
}
