import axios from "axios";
import cookies from "react-cookies";
import types from "../constants/actionTypes";

export const getPosts = formData => dispatch => {
  // dispatch({ type: types.REGISTER_REQUEST });
  axios
    .get("/api/v1/posts")
    .then(({ data }) => {
      console.log(data);
      const { posts } = data;
      dispatch({ type: types.GET_POSTS, posts });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: types.REGISTER_FAILURE });
    });
};

// export const signIn = (email, password) => dispatch => {
//   // dispatch({ type: types.START_AUTHENTICATION });
//   axios
//     .post("/api/v1/signin", { email, password })
//     .then(({ data }) => {
//       console.log(data);
//       const { user, token } = data;
//       cookies.save("token", token, { path: "/" });
//       dispatch({ type: types.LOGIN_SUCCESS, user });
//     })
//     .catch(err => {
//       const errors = err.response.data.message;
//       dispatch({
//         type: types.LOGIN_FAILURE,
//         errors,
//       });
//     });
// };

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
