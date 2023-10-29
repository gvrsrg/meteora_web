import React from "react";
import srch from "./SearchBar.module.css";

// Сделать модальное окно с поиском
// Сделать логику ввода запроса

export default function SearchBar() {
    return (
        <form className={srch.searchBar} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Поиск" className="input" />
        </form>
    );
}
