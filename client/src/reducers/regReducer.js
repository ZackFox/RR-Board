import types from '../constants/actionTypes';

const regReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_REQUEST:
      return {
        register: true,
        user: action.user,
      };
    case types.REGISTER_SUCCESS:
      return {};
    case types.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
};

export default regReducer;
