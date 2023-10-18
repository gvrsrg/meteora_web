import React, { useState, useEffect } from "react";
import loader from "./assets/preloader.svg";
import "./styles/themes/dark.css";
import "./index.css";
import ls from "./styles/LoadingScreen.module.css";
import get_client from "./data/api";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import MainPage from "./pages/MainPage/MainPage";

export default function App() {
  const [client, setClient] = useState("");

  useEffect(() => {
    get_client().then((status) => setClient(status));
  }, []);

  if (typeof client !== "object") return <MainPage client={client} />;

  if (client === false) return <WelcomePage />;

  return (
    <div className="app">
      <main className={"fullScreen " + ls.loadingScreen}>
        <div className={ls.screenPanel}>
          <div className={ls.title}>Meteora</div>

          <span className={ls.waitText}>Please wait. Starting the app...</span>

          <img
            src={loader}
            alt=""
            className={"ui-icon " + ls.preloader}
          />
        </div>
      </main>
    </div>
  );
}