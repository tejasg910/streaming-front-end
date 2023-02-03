import { createReducer } from '@reduxjs/toolkit';

export const courseReducer = createReducer(
  { courses: [] },
  {
    getAllCoursesRequest: state => {
      state.loading = true;
    },
    getAllCoursesSuccess: (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    },
    getAllCoursesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addToPlayListRequest: state => {
      state.loading = true;
    },
    addToPlayListSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addToPlayListFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    removeFromPlayListRequest: state => {
      state.loading = true;
    },
    removeFromPlayListSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    removeFromPlayListFail: (state, action) => {
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
