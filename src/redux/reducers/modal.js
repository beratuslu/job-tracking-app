import { SHOW_API_MODAL, HIDE_API_MODAL } from "../actionTypes";

const defaultState = { title: "", content: "", visible: false };

const filters = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_API_MODAL: {
      const { title, content } = action.payload;
      return { title, content, visible: true };
    }
    case HIDE_API_MODAL: {
      return { ...state, visible: false };
    }
    default: {
      return state;
    }
  }
};

export default filters;
