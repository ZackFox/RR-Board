import axios from "axios";

import types from "../constants/actionTypes";

export const getPosts = () => dispatch => {
  dispatch({ type: types.START_FETCHING_POSTS });
  axios
    .get("/api/v1/posts")
    .then(({ data }) => {
      const { posts } = data;
      dispatch({ type: types.GET_POSTS, posts });
      dispatch({ type: types.STOP_FETCHING_POSTS });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: types.STOP_FETCHING_POSTS });
    });
};

export const getCurrentPost = id => dispatch => {
  dispatch({ type: types.START_FETCHING_POSTS });
  axios
    .get(`/api/v1/post/${id}`, {})
    .then(({ data }) => {
      dispatch({ type: types.GET_CURRENT_POST, post: data.post });
      dispatch({ type: types.STOP_FETCHING_POSTS });
    })
    .catch(err => {
      const errors = err.response.data.message;
      dispatch({ type: types.STOP_FETCHING_POSTS });
    });
};

// export const getUser = () => dispatch => {
//   dispatch({ type: types.START_AUTHENTICATION });
//   axios
//     .get("/api/v1/user", {
//       headers: { Authorization: `Bearer ${cookies.load("token")}` },
//     })
//     .then(({ data }) => {
//       const { user } = data;
//       dispatch({ type: types.LOGIN_SUCCESS, user });
//       dispatch({ type: types.STOP_AUTHENTICATION });
//     })
//     .catch(() => {
//       cookies.remove("token");
//       // dispatch({ type: "UNAUTH_USER" });
//     });
// };
