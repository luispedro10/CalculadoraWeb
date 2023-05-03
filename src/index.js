import React from "react";
import ReactDOM from "react-dom";
import StartApp from "./components/StartApp";
import "../src/components/Botones.css";
import "../src/components/Calc.css";
import "../src/components/Back.css";

const StartComponent = () => {
  return <h1> New React APP</h1>;
};

ReactDOM.render(<StartApp />, document.getElementById("root"));