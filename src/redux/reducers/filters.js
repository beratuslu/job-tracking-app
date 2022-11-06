import { SET_PRIORITY_FILTER, SET_NAME_FILTER } from "../actionTypes";

const defaultState = { nameFilter: "", priorityFilter: [] };

const filters = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PRIORITY_FILTER: {
      return { ...state, priorityFilter: action.payload };
    }
    case SET_NAME_FILTER: {
      return { ...state, nameFilter: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default filters;
