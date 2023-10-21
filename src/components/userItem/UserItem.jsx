import side from "../SideBar/SideBar.module.css";

export default function UserItem() {
    const client = {
        "icon": "demo",
        "nickname": "DEMO_USER",
        "userId": "xxx"
    }

    const userItem = `menuItem ${side.menuItem} ${side.userItem}`
    
    return (
        <div className={userItem} onClick={(e) => {}}>
            <img src={client.icon} alt="" />
            <span>{client.nickname}</span>
        </div>
    )
}