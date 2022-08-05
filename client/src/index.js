import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// BrowserRouter helps keeps the UI in sync with the URL. It also helps with seamless transitions while switching between components. Basically, it will only reload/refresh the component that needs to be changed instead of refreshing/reloading the entire page. Though BrowserRouter is not a necessity, it is a must if you want your app to be responsive.
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
)