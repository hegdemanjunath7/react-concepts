import React from "react";
import ReactDOM from "react-dom";
import ThemeData from "./theme";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <ThemeData />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
