import { configureStore } from '@reduxjs/toolkit';
import {userReducer} from './features/userSlice/user-slice';

export const store = configureStore({
  reducer: {
   user: userReducer
  },
  devTools: true,
});
