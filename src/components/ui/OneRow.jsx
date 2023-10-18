import index from "../screens/index/Index.module.css"
import dark from "../themes/dark.module.css"
import main from "../Main.module.css"

import orow from "./OneRow.module.css"

// Сделать модальное окно для создания клуба

export default function OneRow(props) {
    const olist = `${orow["row-list"]} ${props.name}`
    
    const block = `${dark["ui-block"]} ${main["ui-block"]} 
    ${orow["row-block"]} ${props.name}`

    return (
        <div className={block}>
            <span className={orow["row-title"]}>
                {props.title}
            </span>

            <div className={orow["list-tech"]}>
                {
                    props.createClub ?
                        <div className={index["new-club"]} onClick={(e) => {}}>
                            Создать клуб
                        </div>
                    : null
                }
                
                <div className={olist}>Objects list</div>
            </div>
        </div>
    )
}