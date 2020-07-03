import React from "react";
import ReactDOM from "react-dom";
import { GifSearcherApp } from "./GifSearcherApp";
import "./index.css";

ReactDOM.render(
  <GifSearcherApp defaultCategories={["Berserk"]} />,
  document.getElementById("root")
);
