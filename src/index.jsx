import App from "./App";
import React from "react";
import "./styles/index.css";
import "./styles/themes/dark.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);