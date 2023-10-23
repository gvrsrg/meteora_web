import { useNavigate } from "react-router-dom";
import side from "../SideBar/SideBar.module.css";

export default function UserItem({ icon, nickname, userId }) {
	const navigate = useNavigate();
	const userItem = `menuItem ${side.menuItem} ${side.userItem}`;

	return (
		<div className={userItem} onClick={(e) => navigate("/u/" + userId)}>
			<img src={icon} alt="" />
			<span>{nickname}</span>
		</div>
	);
}