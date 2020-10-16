import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createEmployee } from "./../../actions/EmployeeActions";
import classnames from "classnames";

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeName: "",
      employeeIdentifier: "",
      aboutEmployee: "",
      joiningDate: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onSubmit(event) {
    event.preventDefault();
    const newEmployee = {
      employeeName: this.state.employeeName,
      employeeIdentifier: this.state.employeeIdentifier,
      aboutEmployee: this.state.aboutEmployee,
      joiningDate: this.state.joiningDate,
    };
    //console.log(newEmployee);
    this.props.createEmployee(newEmployee, this.props.history);
  }
  onChange(event) {
    // console.log("---------onChange triggered----------");
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Create Employee form</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg ", {
                      "is-invalid": errors.employeeName,
                    })}
                    placeholder="Employee Name"
                    name="employeeName"
                    value={this.state.employeeName}
                    onChange={this.onChange}
                  />
                  {errors.employeeName && (
                    <div className="invalid-feedback">
                      {errors.employeeName}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg ", {
                      "is-invalid": errors.employeeIdentifier,
                    })}
                    placeholder="Unique Employee ID"
                    name="employeeIdentifier"
                    value={this.state.employeeIdentifier}
                    onChange={this.onChange}
                  />
                  {errors.employeeIdentifier && (
                    <div className="invalid-feedback">
                      {errors.employeeIdentifier}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg ", {
                      "is-invalid": errors.aboutEmployee,
                    })}
                    placeholder="About Employee"
                    name="aboutEmployee"
                    value={this.state.aboutEmployee}
                    onChange={this.onChange}
                  ></textarea>
                  {errors.aboutEmployee && (
                    <div className="invalid-feedback">
                      {errors.aboutEmployee}
                    </div>
                  )}
                </div>
                <h6>Joining Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="joiningDate"
                    value={this.state.joiningDate}
                    onChange={this.onChange}
                  />
                </div>

                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddEmployee.propTypes = {
  createEmployee: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { createEmployee }
)(AddEmployee);
