import types from "../constants/actionTypes";

const initialState = {
  posts: [],
  currentPost: {},
  isFetching: false,
  errors: "",
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_FETCHING_POSTS:
      return { ...state, isFetching: true };
    case types.STOP_FETCHING_POSTS:
      return { ...state, isFetching: false };
    case types.GET_POSTS:
      return { ...state, posts: action.posts };
    case types.GET_CURRENT_POST:
      return { ...state, currentPost: action.post };
    default:
      return state;
  }
};

export default postReducer;
