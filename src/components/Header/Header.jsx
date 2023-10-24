import React from "react";
import logo from "../../assets/favicon.svg";
import cls from "./Header.module.css";
import AuthButtons from "../AuthButtons/AuthButtons";
import SearchBar from "../SearchBar/SearchBar";

export default function Header({ auth }) {
  return (
    <header className={cls.header}>
      <div className={cls.logo} onClick={(e) => (window.location.href = "/")}>
        <img src={logo} alt="" />
        <span>Meteora</span>
      </div>
      <SearchBar />
      {!auth && <AuthButtons />}
    </header>
  );
}
