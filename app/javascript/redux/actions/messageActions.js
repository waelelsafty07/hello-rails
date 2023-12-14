import axios from 'axios';

export const fetchRandomMessage = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('messages/index');
      dispatch({
        type: 'FETCH_MESSAGE_SUCCESS',
        payload: response.data.message,
      });
    } catch (error) {
      dispatch({ type: 'FETCH_MESSAGE_ERROR', error: true });
    }
  };
};
