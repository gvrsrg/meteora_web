import { exceptions } from "../../data/config";
import { useNavigate } from "react-router-dom";
import error_img from "../../assets/error.svg";
import error from "./ErrorPage.module.css";

export default function Error({ code }) {
	const navigate = useNavigate();
	const formButton = `${error.formButton} formButton fb__green`;

	return (
		<div className={"fullScreen " + error.screen}>
			<img src={error_img} alt="" className={"icon " + error.preview} />

			<div className={error.title}>{exceptions[code]}</div>

			<div className={formButton} onClick={() => navigate("/")}>
				На главную
			</div>
		</div>
	);
}