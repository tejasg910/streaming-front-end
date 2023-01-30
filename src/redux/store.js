import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';
export const server = 'https://streaming-app.onrender.com/api/v1';
// export const server = 'http://localhost:5000/api/v1';
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
