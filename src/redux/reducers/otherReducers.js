import { createReducer } from '@reduxjs/toolkit';

export const requestCourseReducer = createReducer(
  {},
  {
    requestCourseRequest: state => {
      state.loading = true;
    },
    requestCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    requestCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    contactRequest: state => {
      state.loading = true;
    },
    contactSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    contactFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
  }
);
