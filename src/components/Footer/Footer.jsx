import React from "react";
import { Link } from "react-router-dom";
import footer from "./Footer.module.css";

export default function Footer() {
	return (
		<footer>
			<div className={footer.copyright}>
				&copy; Meteora 2023
				<span>React 0.4.0 Beta!</span>
			</div>

			<div className={footer.links}>
				<Link to="/terms">Условия пользования</Link>
				<Link to="/privacy">Политика конфериденциальности</Link>
			</div>
		</footer>
	);
}