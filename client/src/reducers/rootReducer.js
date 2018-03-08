import { combineReducers } from "redux";
import authReducer from "./authReducer";
import regReducer from "./regReducer";
import postReducer from "./postReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  authReducer,
  postReducer,
  profileReducer,
  // reg: regReducer,
});

export default rootReducer;
