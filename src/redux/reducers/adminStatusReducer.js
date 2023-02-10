import { createReducer } from '@reduxjs/toolkit';

export const adminStausReducer = createReducer(
  {},
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
  }
);
