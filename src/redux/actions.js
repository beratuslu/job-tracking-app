import {
  ADD_JOB,
  DELETE_JOB,
  UPDATE_JOB,
  GET_JOBS,
  SET_NAME_FILTER,
  SET_PRIORITY_FILTER,
  SHOW_API_MODAL,
  HIDE_API_MODAL,
} from "./actionTypes";
import DataService from "../services/jobService";

export const hideApiModal = (filterArr) => ({
  type: HIDE_API_MODAL,
});
export const setPriorityFilter = (filterArr) => ({
  type: SET_PRIORITY_FILTER,
  payload: filterArr,
});
export const setNameFilter = (text) => ({
  type: SET_NAME_FILTER,
  payload: text,
});
export const getJobs = () => {
  return async function (dispatch) {
    try {
      const res = await DataService.getAll();

      dispatch({
        type: GET_JOBS,
        payload: { list: res.data },
      });

      dispatch({
        type: SHOW_API_MODAL,
        payload: {
          title: "Api call successful! ",
          content:
            "If there are data in the Local Storage, they will be replaced with data from the API.",
        },
      });
    } catch (err) {
      dispatch({
        type: GET_JOBS,
        payload: {},
      });
      dispatch({
        type: SHOW_API_MODAL,
        payload: {
          title: "Can not access API!",
          content:
            'There was an error while reaching API. Application will try to load jobs from "Local Storage".',
        },
      });
      console.log(err);
    }
  };
};
export const addJob = (name, priority) => ({
  type: ADD_JOB,
  payload: {
    name,
    priority,
  },
});
export const updateJob = ({ id, priority }) => ({
  type: UPDATE_JOB,
  payload: {
    id,
    priority,
  },
});

export const deleteJob = (id) => ({
  type: DELETE_JOB,
  payload: { id },
});
