import React from "react"

import dark from "../themes/dark.module.css"
import search from "./SearchBar.module.css"

// Сделать модальное окно с поиском
// Сделать логику ввода запроса

export default function SearchBar() {
    const search_name = `${search["search-bar"]} ${dark["search-bar"]}`
    
    return (
        <form className={search_name} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Поиск" className={dark["ui-input"]} />
        </form>
    )
}