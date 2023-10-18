import grid from "./GridBlock.module.css"


export default function GridBlock(props) {
    return (
        <div className={grid["grid-block"] + " " + props.name}>
            <div className={grid["grid-title"]}>
                {props.title}
            </div>

            <div className={grid["grid-list"] + " " + props.name}></div>
        </div>
    )
}