import React from "react";
import screen from "./LoadingScreen.module.css";
import loader from "../../assets/preloader.svg";

export default function Loading() {
    return (
        <div className={screen.loadingScreen}>
            <div className={screen.screenPanel}>
                <div className={screen.title}>Meteora</div>
                <span className={screen.waitText}>
                    Please wait. Starting the app...
                </span>
                <img alt="" src={loader} className={screen.preloader} />
            </div>
        </div>
    );
}
