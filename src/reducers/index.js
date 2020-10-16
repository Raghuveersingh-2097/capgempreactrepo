import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import employeeReducer from "./employeeReducer";
export default combineReducers({
  errors: errorReducer,
  employees: employeeReducer,
});
