const initialState = {
  data: {},
  isLoading: false,
  errors: '',
  message: '',
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_POST':
      return state;
    default:
      return state;
  }
};

export default postReducer;
