import { configureStore } from '@reduxjs/toolkit';
import { adminReducer } from './reducers/adminReducer';
import { adminStausReducer } from './reducers/adminStatusReducer';
import { courseReducer } from './reducers/courseReducer';
import { requestCourseReducer } from './reducers/otherReducers';
import { profileReducer } from './reducers/profileReducer';
import { subscriptionReducer, userReducer } from './reducers/userReducer';

// export const server = 'https://streaming-app.onrender.com/api/v1';
// export const server = 'http://localhost:8000/api/v1';
export const server = 'https://streaming-backend.vercel.app/api/v1';
const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    subscription: subscriptionReducer,
    other: requestCourseReducer,
    admin: adminReducer,
    adminStatus: adminStausReducer,
  },
});

export default store;
