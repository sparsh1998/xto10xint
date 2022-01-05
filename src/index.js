import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ProductsPage from "./ProductsPage/ProductsPage";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<ProductsPage />, document.getElementById("root"));
registerServiceWorker();
