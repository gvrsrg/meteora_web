import React from "react";
import header from "./Header.module.css";
import logo from "../../assets/favicon.svg";
import SearchBar from "../SearchBar/SearchBar";
import AuthButtons from "../AuthButtons/AuthButtons";

export default function Header(props) {
	return (
		<header className={props.className}>
			<div
				className={header.logo}
				onClick={(e) => (window.location.href = "/")}
			>
				<img src={logo} alt="" />
				<span>Meteora</span>
			</div>

			{props.search && <SearchBar />}

			<div className={header.filler}></div>

			{props.auth && <AuthButtons />}
		</header>
	);
}
