import React from "react";
import bg from "../../assets/images/bg.jpeg";
import dark from "../../styles/themes/dark.module.css";
import header from "../../components/ui/Header/Header.module.css";
import welcome from "./WelcomePage.module.css";
import main from "../../styles/Main.module.css";
import Header from "../../components/ui/Header/Header";

export default function Welcome() {
  const bigStartButton = `${welcome["form-button"]} 
    ${dark["fb-yellow"]} ${dark["fb__fit"]} ${welcome["fb__big"]}`;

  return (
    <div className={main.fullScreen}>
      <img src={bg} alt="" className={welcome.background} />

      <Header className={header.header__alt} auth={true} />

      <main className={welcome.screen + " " + main.fullScreen__header}>
        <div className={welcome.title}>Meteora - здесь вам всегда рады</div>

        <div className={welcome.subtitle}>
          Добро пожаловать туда, где люди важнее всего
        </div>

        <div className={bigStartButton} onClick={(e) => {}}>
          Начните сейчас
        </div>
      </main>
    </div>
  );
}
