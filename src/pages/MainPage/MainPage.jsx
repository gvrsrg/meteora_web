import React from "react";
import { sideItems } from "../../data/config";
import "../../styles/themes/dark.css";
import "../../index.css";
import GridBlock from "../../components/ui/GridBlock/GridBlock";
import SideBar from "../../components/ui//SideBar/SideBar";
import Header from "../../components/ui/Header/Header";
import OneRow from "../../components/ui/OneRow/OneRow";
import index from "./MainPage.module.css";

export default function Index(props) {
  return (
    <div className="app">
      <Header search={true} />

      <main className={"scrollArea " + index.scrollArea}>
        <SideBar items={sideItems} user={props.client} />

        <div className={index.container}>
          <OneRow name="my-clubs" title="Мои клубы" createClub={true} />
          <OneRow name="popular-clubs" title="Поплуярные клубы" />

          <GridBlock name="board" title="Вам может быть интересно" />
        </div>
      </main>
    </div>
  );
}