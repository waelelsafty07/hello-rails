const initialState = {
  message: '',
  error: false,
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MESSAGE_SUCCESS':
      return { ...state, message: action.payload, error: false };
    case 'FETCH_MESSAGE_ERROR':
      return { ...state, error: true };
    default:
      return state;
  }
};

export default messageReducer;
