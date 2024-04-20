// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      localStorage.setItem("access_token",state.accessToken);
    },
    clearAccessToken: (state) => {
      state.accessToken = null;
      localStorage.removeItem('access_token');
    },
  },
});

export const { setAccessToken, clearAccessToken } = authSlice.actions;
export const selectAccessToken = (state) => state.auth.accessToken;

export default authSlice.reducer;
