import side from "./SideBar.module.css";
import MenuItem from "../MenuItem/MenuItem";
import { sideItems } from "../../data/config";
import { useEffect, useState } from "react";
import get_client from "../../data/api";

export default function SideBar() {
  const [client, setClient] = useState(false);
  const userItem = `${side["menu-item"]} ${side["user-item"]}`;
  const to_user = () => (window.location.href = "/u/" + client.userId);

  useEffect(() => {
    get_client().then((status) => setClient(status));
  }, []);

  if (!sideItems) return null;

  return (
    <aside className={side["ui-sidebar"]}>
      {client ? (
        <div className={userItem} onClick={(e) => to_user()}>
          <img src={client.icon} alt="" />
          <span>{client.nickname}</span>
        </div>
      ) : null}

      {sideItems.map((item) => (
        <MenuItem key={Math.random()} {...item} />
      ))}
    </aside>
  );
}
