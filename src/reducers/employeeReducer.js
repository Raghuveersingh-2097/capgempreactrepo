import { GET_EMPLOYEES } from "../actions/type";

const initialState = {
  employees: [],
  employee: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };
    default:
      return state;
  }
}
