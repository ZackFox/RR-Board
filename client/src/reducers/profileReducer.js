import types from "../constants/actionTypes";

const initialState = {
  profile: {},
  isFetching: false,
  errors: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_FETCHING_PROFILE:
      return { ...state, isFetching: true };
    case types.STOP_FETCHING_PROFILE:
      return { ...state, isFetching: false };
    case types.GET_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

export default profileReducer;
