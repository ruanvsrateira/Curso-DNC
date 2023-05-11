import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HelloWorldFunctional } from "./components/HelloWorldFunctional";
import { HelloWorldClass } from "./components/HelloWorldClass";
import reportWebVitals from "./reportWebVitals";
import { AppClock } from "./components/AppClock";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppClock />
  </React.StrictMode>
);

reportWebVitals();

