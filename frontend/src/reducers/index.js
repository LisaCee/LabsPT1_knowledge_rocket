import {
  LOADING,
  REGISTER,
  LOGIN,
  CHANGE_LOADING,
  ERROR,
  CLEAR_ERROR,
  GET_USER,
  CLEAR_REDIRECT,
  REDIRECT,
  CLEAR_STATE,
  CREATE_ROCKET,
  GET_CLASSES,
  GET_ROCKETS,
  UPDATE_PASSWORD,
  UPDATE_USER,
  GET_2_DAY,
  GET_2_WEEK,
  GET_2_MONTH
} from "../actions";

// team discussion on what the state should look like

const defaultState = {
  userKey: "",
  user: "",
  loading: false,
  success: false,
  error: false,
  errorMsg: "",
  redirect: false,
  rocket: "",
  classes: "",
  question: ""
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };

    case REGISTER:
      return { ...state, userKey: [action.payload], success: true };

    case LOGIN:
      return { ...state, userKey: [action.payload], success: true };

    case CHANGE_LOADING:
      return { ...state, loading: false };

    case GET_USER:
      return { ...state, user: [action.payload], success: true };

    case GET_CLASSES:
      return { ...state, classes: [action.payload], success: true };

    case GET_ROCKETS:
      return { ...state, rockets: [action.payload], success: true };

    case GET_2_DAY:
      return { ...state, question: action.payload, success: true };

    case GET_2_WEEK:
      return { ...state, question: action.payload, success: true };

    case GET_2_MONTH:
      return { ...state, question: action.payload, success: true };

    case UPDATE_PASSWORD:
      return { ...state, user: [action.payload], success: true };

    case UPDATE_USER:
      return { ...state, user: [action.payload], success: true };

    case ERROR:
      return { ...state, error: true, errorMsg: action.payload };

    case CLEAR_ERROR:
      return { ...state, error: false, errorMsg: "" };

    case REDIRECT:
      return { ...state, redirect: true };

    case CLEAR_REDIRECT:
      return { ...state, redirect: false };

    case CREATE_ROCKET:
      return { ...state, rocket: action.payload };

    case CLEAR_STATE:
      return {};

    default:
      return state;
  }
};
