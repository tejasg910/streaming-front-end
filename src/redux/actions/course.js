import axios from 'axios';
import { server } from '../store';

export const getAllCourses =
  (category = '', keyword = '') =>
  async dispatch => {
    try {
      dispatch({ type: 'getAllCoursesRequest' });
      const { data } = await axios.get(
        `${server}/courses?keyword=${keyword}&category=${category}`,
        { withCredentials: true }
      );

      dispatch({ type: 'getAllCoursesSuccess', payload: data.data });
    } catch (error) {
      dispatch({
        type: 'getAllCoursesFail',
        payload: error.response.data.message,
      });
    }
  };
