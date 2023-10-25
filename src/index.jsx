import App from "./App";
import React from "react";
import "./styles/index.css";
import "./styles/themes/dark.css";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { store } from "./js/redux/store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);