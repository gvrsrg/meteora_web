import dark from "../themes/dark.module.css"
import menu from "./SideBar.module.css"


export default function MenuItem({icon, text, link}) {
    const to = () => window.location.href = link

    const mit = `${menu["menu-item"]} ${dark["menu-item"]}`
    const mdiv = `${menu["menu-divider"]} ${dark["menu-divider"]}`

    if (text === "divider") return <div className={mdiv}></div>
    
    return (
        <div className={mit} onClick={(e) => to()}>
            <img src={icon} alt="" className={dark["ui-icon"]} />
            <span>{text}</span>
        </div>
    )
}