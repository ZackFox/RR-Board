import types from "../constants/actionTypes";

const initialState = {
  posts: [],
  isLoading: false,
  errors: "",
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return { ...state, posts: action.posts };
    default:
      return state;
  }
};

export default postReducer;
