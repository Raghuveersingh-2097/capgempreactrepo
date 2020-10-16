import axios from "axios";
import { GET_ERRORS, GET_EMPLOYEES } from "./type";
export const createEmployee = (employee, history) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:8080/api/employees",
      employee
    );
    history.push("/dashboard");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const getEmployees = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/api/employees/all");
  dispatch({
    type: GET_EMPLOYEES,
    payload: res.data,
  });
};
