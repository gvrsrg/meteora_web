import side from "./SideBar.module.css";
import MenuItem from "../MenuItem/MenuItem";

export default function SideBar({ items, user }) {
  const userItem = `${side.menuItem} ${side.userItem}`;
  const to_user = () => (window.location.href = "/u/" + user.userId);

  if (!items) return null;

  return (
    <aside className={side.sidebar}>
      {user ? (
        <div className={userItem} onClick={(e) => to_user()}>
          <img src={user.icon} alt="" />
          <span>{user.nickname}</span>
        </div>
      ) : null}

      {items.map((item) => (
        <MenuItem key={Math.random()} {...item} />
      ))}
    </aside>
  );
}