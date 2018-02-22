import axios from "axios";
import cookies from "react-cookies";
import types from "../constants/actionTypes";

export const signUp = formData => dispatch => {
  // dispatch({ type: types.REGISTER_REQUEST });
  axios
    .post("/api/v1/signup", formData)
    .then(({ data }) => {
      const { user, token } = data;
      cookies.save("token", token, { path: "/", httpOnly: true });
      dispatch({ type: types.REGISTER_SUCCESS, user });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: types.REGISTER_FAILURE });
    });
};

export const signIn = (email, password) => dispatch => {
  // dispatch({ type: types.START_AUTHENTICATION });
  axios
    .post("/api/v1/signin", { email, password })
    .then(({ data }) => {
      const { user, token } = data;
      cookies.save("token", token, { path: "/" });
      dispatch({ type: types.LOGIN_SUCCESS, user });
    })
    .catch(err => {
      const errors = err.response.data.message;
      dispatch({
        type: types.LOGIN_FAILURE,
        errors,
      });
    });
};

export const getUser = () => dispatch => {
  dispatch({ type: types.START_AUTHENTICATION });
  axios
    .get("/api/v1/user", {
      headers: { Authorization: `Bearer ${cookies.load("token")}` },
    })
    .then(({ data }) => {
      const { user } = data;
      dispatch({ type: types.LOGIN_SUCCESS, user });
      dispatch({ type: types.STOP_AUTHENTICATION });
    })
    .catch(() => {
      cookies.remove("token");
      // dispatch({ type: "UNAUTH_USER" });
    });
};

export const logOut = () => dispatch => {
  dispatch({ type: types.LOGOUT });
};
