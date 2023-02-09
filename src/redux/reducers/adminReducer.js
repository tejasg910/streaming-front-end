import { createReducer } from '@reduxjs/toolkit';

export const adminReducer = createReducer(
  { users: [] },
  {
    getADminStatsRequest: state => {
      state.loading = true;
    },
    getADminStatsSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
      state.stats = action.payload.stats;
      state.usersCount = action.payload.usersCount;
      state.subscriptionCount = action.payload.subscriptionCount;
      state.subscriptionPercentage = action.payload.subscriptionPercentage;
      state.usersPercentage = action.payload.usersPercentage;
      state.viewsPercentage = action.payload.viewsPercentage;
      state.subscriptionProfit = action.payload.subscriptionProfit;
      state.usersProfit = action.payload.usersProfit;
      state.viewsProfit = action.payload.viewsProfit;
      state.viewsCount = action.payload.viewsCount;
    },
    getADminStatsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createCourseRequest: state => {
      state.loading = true;
    },
    createCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getAllUsersRequest: state => {
      state.loading = true;
    },
    getAllUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    getAllUsersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteLectureRequest: state => {
      state.loading = true;
    },
    deleteLectureSuccess: (state, action) => {
      state.loading = false;
      state.lectures = action.payload;
    },
    deleteLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addLectureRequest: state => {
      state.loading = true;
    },
    addLectureSuccess: (state, action) => {
      state.loading = false;
      state.lectures = action.payload;
    },
    addLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteCourseRequest: state => {
      state.loading = true;
    },
    deleteCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserRequest: state => {
      state.loading = true;
    },
    deleteUserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateUserRoleRequest: state => {
      state.loading = true;
    },
    updateUserRoleSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateUserRoleFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearMessage: state => {
      state.message = null;
    },
    clearError: state => {
      state.error = null;
    },
  }
);
