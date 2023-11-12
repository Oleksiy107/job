import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/App.jsx";
import { HashRouter } from "react-router-dom";
import "../scss/header.scss";
import "../scss/root.scss";
import "../scss/onePage.scss";
import "../scss/topicDetail.scss";
import "../scss/linkPage.scss";
import "../scss/recomendation.scss";
import "../scss/topicPhoto.scss";
const rootEl = document.getElementById("root");
const rootInstance = ReactDom.createRoot(rootEl);

rootInstance.render(
  <HashRouter basename="/">
    <App />
  </HashRouter>
);
