import React from "react";
import GridBlock from "../../components/GridBlock/GridBlock";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import OneRow from "../../components/OneRow/OneRow";
import index from "./MainPage.module.css";

export default function Index() {
  return (
    <div className="app">
      <Header search={true} />

      <main className={"scrollArea " + index.scrollArea}>
        <SideBar needUser={true} />

        <div className={index.container}>
          <OneRow name="myClubs" title="Мои клубы" createClub={true} />
          <OneRow name="popularClubs" title="Поплуярные клубы" />

          <GridBlock name="board" title="Вам может быть интересно" />
        </div>
      </main>
    </div>
  );
}
