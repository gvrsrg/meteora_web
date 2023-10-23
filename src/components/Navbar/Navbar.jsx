export default function Navbar() {
    return (
        <div className="mobile-navbar">
            <div className="nav-item">
                <img src="/static/icons/ui/home.svg" alt="" className="ui-icon ui-clickable" />
                <span>Главная</span>
            </div>
            
            <div className="nav-item">
                <img src="/static/icons/ui/chat.svg" alt="" className="ui-icon ui-clickable" />
                <span>Чаты</span>
            </div>

            <div className="nav-item" onclick="window.location.href = '/u/{{user[2]}}'">
                <img src="/static/icons/ui/account.svg" alt="" className="ui-icon ui-clickale" />
                <span>Профиль</span>
            </div>

            <div className="nav-item" onclick="mobile_menu()">
                <img src="/static/icons/ui/menu.svg" alt="" className="ui-icon ui-clickable" />
                <span>Ещё</span>
            </div>
        </div>
    )
}