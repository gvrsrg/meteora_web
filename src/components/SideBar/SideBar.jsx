import side from "./SideBar.module.css";
import MenuItem from "../MenuItem/MenuItem";
import UserItem from "../userItem/UserItem";
import { sideItems } from "../../data/config";

export default function SideBar(props) {
	if (!sideItems) return null;

	return (
		<aside className={side.sidebar}>
			{props.user ? <UserItem {...props.user} /> : null}

			{sideItems.map((item) => (
				<MenuItem key={Math.random()} {...item} />
			))}
		</aside>
	);
}
