import React from "react";
import header from "./Header.module.css";
import logo from "../../assets/favicon.svg";
import SearchBar from "../SearchBar/SearchBar";
import AuthButtons from "../AuthButtons/AuthButtons";
import { useNavigate } from "react-router";

export default function Header(props) {
    const navigate = useNavigate();

    return (
        <header className={props.className}>
            <div className={header.logo} onClick={() => navigate("/")}>
                <img src={logo} alt="" />
                <span>Meteora</span>
            </div>
            {props.search && <SearchBar />}
            <div className={header.filler}></div>
            {props.auth && <AuthButtons />}
        </header>
    );
}
