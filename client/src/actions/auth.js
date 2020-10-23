import axios from 'axios';
import { setAlert } from './alert';
import { REGISTER_FAIL, REGISTER_SUCCESS } from './types';

// Register user:
export const register = ({ name, email, password }) => async (dispatch) => {
  try {
    const res = await axios.post('/api/users', { name, email, password });

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};