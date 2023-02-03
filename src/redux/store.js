import { configureStore } from '@reduxjs/toolkit';
import { courseReducer } from './reducers/courseReducer';
import { profileReducer } from './reducers/profileReducer';
import { subscriptionReducer, userReducer } from './reducers/userReducer';

export const server = 'https://streaming-app.onrender.com/api/v1';
// export const server = 'http://localhost:5000/api/v1';
// export const server = 'https://streaming-backend.vercel.app/api/v1';
const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    subscription: subscriptionReducer,
  },
});

export default store;
