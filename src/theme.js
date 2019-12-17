import React from "react";
import CompanyDetails from "./context";

const TContext = React.createContext();
const TConsumer = TContext.Consumer;

class TProvider extends React.Component {
  toggleTheme = evt => {
    this.setState({ theme: evt.target.checked ? "night" : "day" });
  };

  state = {
    theme: "night",
    toggleTheme: this.toggleTheme
  };

  render() {
    return (
      <TContext.Provider value={this.state}>
        {this.props.children}
      </TContext.Provider>
    );
  }
}

class Slider extends React.Component {
  render() {
    return (
      <label className="switch">
        <TConsumer>
          {({ toggleTheme, theme }) => (
            <input
              onChange={toggleTheme}
              type="checkbox"
              checked={theme === "night"}
            />
          )}
        </TConsumer>
        <span className="slider round" />
      </label>
    );
  }
}

const Footer = () => (
  <footer>
    <Slider />
  </footer>
);

const ThemeData = () => (
  <TProvider>
    <TConsumer>
      {({ theme }) => (
        <div className={theme}>
          <div className="col-md-12">
            <div className="col">
              <h3 className="text-center">Context Example</h3>
            </div>
          </div>
          <CompanyDetails />
          <Footer />
        </div>
      )}
    </TConsumer>
  </TProvider>
);

export default ThemeData;
