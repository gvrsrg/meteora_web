import React from "react"

import logo from "../../assets/favicon.svg"

import header from "./Header.module.css"
import main from "../Main.module.css"

import AuthButtons from "./AuthButtons"
import SearchBar from "./SearchBar"


export default function Header(props) {
    return (
        <header className={props.className}>
            <div className={header.logo}
                onClick={ (e) => window.location.href = "/" }
            >
                <img src={logo} alt="" />
                <span>Meteora</span>
            </div>

            {
                props.search ?
                    <SearchBar />
                : null
            }

            <div className={main["ui-filler"]}></div>

            {
                props.auth ? <AuthButtons />
                : null
            }
        </header>
    )
}