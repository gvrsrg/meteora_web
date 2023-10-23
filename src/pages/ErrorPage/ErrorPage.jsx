import { exceptions } from "../../data/config";
import { useNavigate } from "react-router-dom";
import error from "../../assets/error.svg";
import cls from "./ErrorPage.module.css";

export default function Error({ code }) {
  const navigate = useNavigate();
  return (
    <div className={cls.screen}>
      <img src={error} alt="" className={cls.preview} />
      <div className={cls.title}>{exceptions[code]}</div>
      <div className={cls.formButton} onClick={() => navigate("/")}>
        На главную
      </div>
    </div>
  );
}
