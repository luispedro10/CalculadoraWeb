import React from "react";
import ReactDOM from "react-dom";
import StartApp from "./components/startApp";
import "../src/components/Botones.css";
import "../src/components/Calculadora.css";
import "../src/components/Tablero.css";

const StartComponent = () => {
  return <h1> New React APP</h1>;
};

ReactDOM.render(<StartApp />, document.getElementById("root"));