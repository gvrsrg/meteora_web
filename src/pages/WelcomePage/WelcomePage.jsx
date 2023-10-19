import React from "react";
import bg from "../../assets/images/bg.jpeg";
import "../../styles/themes/dark.css";
import "../../index.css";
import header from "../../components/ui/Header/Header.module.css";
import welcome from "./WelcomePage.module.css";
import Header from "../../components/ui/Header/Header";

export default function Welcome() {
  const bigStartButton = `formButton formButton__alt fb__yellow 
    fb__fit ${welcome.fb__big}`;

  return (
    <div className="fullScreen">
      <img src={bg} alt="" className={welcome.background} />

      <Header className={header.header__alt} auth={true} />

      <main className={welcome.screen + " fullScreen__header"}>
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