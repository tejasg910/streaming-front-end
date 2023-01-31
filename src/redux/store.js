import { configureStore } from '@reduxjs/toolkit';
import { profileReducer, userReducer } from './reducers/userReducer';
export const server = 'https://streaming-app.onrender.com/api/v1';
// export const server = 'http://localhost:5000/api/v1';
// export const server = 'https://coursebundler.herokuapp.com/api/v1';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
  },
});

export default store;
