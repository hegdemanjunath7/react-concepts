import React from "react";

const CompanyContext = React.createContext();

class CompanyContainer extends React.Component {
  state = {
    datasets: [
      {
        id: 1,
        companyName: "Think Design",
        employees: 50,
        location: "Bangalore"
      },
      {
        id: 2,
        companyName: "Think Design",
        employees: 60,
        location: "Hyderabad"
      },
      {
        id: 3,
        companyName: "Think Design",
        employees: 40,
        location: "Mumbai"
      }
    ]
  };

  render() {
    const data = this.state.datasets;

    return (
      <CompanyContext.Provider value={{ data }}>
        <CompanyDetails />
      </CompanyContext.Provider>
    );
  }
}

/* Dumb Component */
const CompanyDetails = () => (
  <CompanyContext.Consumer>
    {context => (
      <div className="col-md-12">
        <div className="row">
          {context.data.map(branches => (
            <div className="col-md-4" key={branches.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Name: {branches.companyName}</h5>
                  <h6>Employees - {branches.employees}</h6>
                  <p className="card-text">Location - {branches.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </CompanyContext.Consumer>
);

export default CompanyContainer;
