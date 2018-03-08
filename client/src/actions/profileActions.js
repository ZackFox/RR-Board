import axios from "axios";

import types from "../constants/actionTypes";

export const getProfile = id => dispatch => {
  dispatch({ type: types.START_FETCHING_PROFILE });
  axios
    .get(`/api/v1/user/${id}`, {})
    .then(({ data }) => {
      dispatch({ type: types.GET_PROFILE, profile: data.user });
      dispatch({ type: types.STOP_FETCHING_PROFILE });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: types.STOP_FETCHING_PROFILE });
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
