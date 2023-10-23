import React from "react";
import bg from "../../assets/images/bg.jpeg";
import cls from "./WelcomePage.module.css";
import Header from "../../components/Header/Header";

export default function Welcome() {
  return (
    <div className="fullScreen">
      <img src={bg} alt="" className={cls.background} />
      <Header auth={false} />
      <main className={cls.screen}>
        <div className={cls.title}>Meteora - здесь вам всегда рады</div>
        <div className={cls.subtitle}>
          Добро пожаловать туда, где люди важнее всего
        </div>
        <div className={cls.startButton}>Начните сейчас</div>
      </main>
    </div>
  );
}
