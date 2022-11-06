import { ADD_JOB, DELETE_JOB, UPDATE_JOB, GET_JOBS } from "../actionTypes";

const defaultState = [];
const saveItemsToLocalStorage = (list) => {
  localStorage.setItem("list", JSON.stringify(list));
};

const getNextId = (state) => {
  if (!state.length) {
    return 1;
  }
  const sorted = state.sort((a, b) => (a.id < b.id ? 1 : -1));
  return sorted[0].id + 1;
};

const jobList = (state = defaultState, action) => {
  switch (action.type) {
    case GET_JOBS: {
      let { list } = action.payload;
      if (list) {
        saveItemsToLocalStorage(list);
      } else {
        list = JSON.parse(localStorage.getItem("list"));
      }
      let newState = list ? [...list] : [];

      return newState;
    }
    case ADD_JOB: {
      const { name, priority } = action.payload;
      const id = getNextId(state);
      const newState = [
        ...state,
        {
          id,
          name,
          priority,
        },
      ];
      saveItemsToLocalStorage(newState);
      return newState;
    }
    case UPDATE_JOB: {
      const { id, priority } = action.payload;
      const newState = [
        ...state.map((item, i) =>
          id === item.id ? { ...item, priority } : item
        ),
      ];
      saveItemsToLocalStorage(newState);
      return newState;
    }
    case DELETE_JOB: {
      const { id } = action.payload;
      const newState = [...state.filter((item) => item.id !== id)];
      saveItemsToLocalStorage(newState);
      return newState;
    }
    default:
      return state;
  }
};

export default jobList;
