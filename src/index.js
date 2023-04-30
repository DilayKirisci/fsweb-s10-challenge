import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-thunk";
import { reducer } from "./reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducer, applyMiddleware(logger, thunk));

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<>
				<App />
			</>
		</BrowserRouter>
	</Provider>
);
