import React from "react"

import { sideItems } from "../../../config"

import main from "../../Main.module.css"
import index from "./Index.module.css"

import GridBlock from "../../ui/GridBlock"
import SideBar from "../../ui/SideBar"
import Header from "../../ui/Header"
import OneRow from "../../ui/OneRow"

export default function Index(props) {
    return (
        <div className="app">
            <Header search={true} />

            <main className={main.scrollArea + " " + index.scrollArea}>
                <SideBar items={sideItems} user={props.client} />
                
                <div className={index.container}>
                    <OneRow name="my-clubs" title="Мои клубы" createClub={true} />
                    <OneRow name="popular-clubs" title="Поплуярные клубы" />

                    <GridBlock name="board" title="Вам может быть интересно" />
                </div>
            </main>
        </div>
    )
}