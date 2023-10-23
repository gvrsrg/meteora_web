import React from "react";
import screen from "./LoadingScreen.module.css";
import loader from "../../assets/preloader.svg";

export default function Loading() {
	return (
		<div className={"fullScreen " + screen.loadingScreen}>
			<div className={screen.screenPanel}>
				<div className={screen.title}>Meteora</div>
				<span className={screen.waitText}>
					Please wait. Starting the app...
				</span>
				<img
					src={loader}
					alt=""
					className={"icon " + screen.preloader}
				/>
			</div>
		</div>
	);
}
