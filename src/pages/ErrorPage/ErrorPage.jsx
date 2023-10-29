import React from "react";
import error from "./ErrorPage.module.css";
import { exceptions } from "../../js/config";
import error_img from "../../assets/error.svg";
import { useNavigate } from "react-router-dom";

export default function Error({ code }) {
    const navigate = useNavigate();

    return (
        <div className={error.screen}>
            <img src={error_img} alt="" className={error.preview} />
            <div className={error.title}>{exceptions[code]}</div>
            <div className={error.button} onClick={() => navigate("/")}>
                На главную
            </div>
        </div>
    );
}
