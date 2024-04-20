// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import authReducer from '../features/authSlice';
import customizeProductSlice, { initialState  } from '../features/customizeProductSlice';
import settingsSlice from '../features/settingsSlice';


export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem('customizeProductState', JSON.stringify(store.getState().customizeProduct));
  return result;
};
const storedCustomizeProductState = JSON.parse(localStorage.getItem('customizeProductState')) || initialState;

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    customizeProduct:customizeProductSlice,
    settingsTab:settingsSlice
  },
  preloadedState: {
    customizeProduct: storedCustomizeProductState,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)

});


