import React from "react";
import search from "./SearchBar.module.css";

// Сделать модальное окно с поиском
// Сделать логику ввода запроса

export default function SearchBar() {
	const search_name = `${search.searchBar} searchBar`;
	return (
		<form className={search_name} onSubmit={(e) => e.preventDefault()}>
			<input type="text" placeholder="Поиск" className="input" />
		</form>
	);
}