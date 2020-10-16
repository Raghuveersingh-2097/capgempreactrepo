import React, { Component } from "react";
import EmployeeDetailComponent from "./EmployeeDetailComponent";
import CreateEmployeeButton from "./employees/CreateEmployeeButton";

import { connect } from "react-redux";
import { getEmployees } from "../actions/EmployeeActions";
import { PropTypes } from "prop-types";

class Dashboard extends Component {
  componentDidMount() {
    //This lifecyclehook is used to get the employees from redux store's state
    this.props.getEmployees();
  }
  render() {
    const { employees } = this.props.employees;
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Employees</h1>
              <br />
              <CreateEmployeeButton />
              <br />
              <hr />

              {employees.map((employee) => (
                <EmployeeDetailComponent
                  key={employee.id}
                  employee={employee}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  employee: PropTypes.object.isRequired,
  getEmployees: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  employees: state.employees,
});
export default connect(
  mapStateToProps,
  { getEmployees }
)(Dashboard);
