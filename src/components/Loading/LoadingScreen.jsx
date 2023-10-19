import React from "react";
import ls from "./LoadingScreen.module.css";
import loader from "../../assets/preloader.svg";

const Loading = () => {
  return (
    <div className={"fullScreen " + ls.loadingScreen}>
      <div className={ls.screenPanel}>
        <div className={ls.title}>Meteora</div>
        <span className={ls.waitText}>Please wait. Starting the app...</span>
        <img src={loader} alt="" className={"ui-icon " + ls.preloader} />
      </div>
    </div>
  );
};

export default Loading;
