import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CompanyContainer from "./context";

function App() {
  return (
    <div className="App">
      <div className="col-md-12">
        <div className="col">
          <h3 className="text-center">Context Example</h3>
        </div>
      </div>
      <CompanyContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
