import { combineReducers } from "redux";
import authReducer from "./authReducer";
import regReducer from "./regReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  authReducer,
  postReducer,
  // reg: regReducer,
});

export default rootReducer;
