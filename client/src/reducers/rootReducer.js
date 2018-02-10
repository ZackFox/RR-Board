import { combineReducers } from 'redux';
import authReducer from './authReducer';
import regReducer from './regReducer';
import userReducer from './userReducer';
// import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  reg: regReducer,
  user: userReducer,
  // posts: postsReducer,
});

export default rootReducer;
