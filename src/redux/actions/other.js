import axios from 'axios';
import { server } from '../store';
export const requestCourse = (name, email, course) => async dispatch => {
  try {
    dispatch({ type: 'requestCourseRequest' });
    const { data } = await axios.post(
      `${server}/courserequest`,
      { name, email, course },
      {
        withCredentials: true,
      }
    );

    dispatch({ type: 'requestCourseSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'requestCourseFail',
      payload: error.response.data.message,
    });
  }
};

export const contact = (name, email, message) => async dispatch => {
  try {
    dispatch({ type: 'contactRequest' });
    const { data } = await axios.post(
      `${server}/contact`,
      { name, email, message },
      {
        withCredentials: true,
      }
    );

    dispatch({ type: 'contactSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'contactFail',
      payload: error.response.data.message,
    });
  }
};
