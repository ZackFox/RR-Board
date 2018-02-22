import types from "../constants/actionTypes";

const initialState = {
  user: {},
  isLoading: false,
  authenticated: false,
  loginErrors: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_AUTHENTICATION:
      return {
        ...state,
        isLoading: true,
      };
    case types.STOP_AUTHENTICATION:
      return {
        ...state,
        isLoading: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        user: action.user,
        loginErrors: "",
      };
    case types.LOGIN_FAILURE:
      return { ...state, loginErrors: action.errors };
    case types.LOGOUT:
      return {
        ...state,
        authenticated: false,
        user: {},
      };
    default:
      return state;
  }
};

export default authReducer;
