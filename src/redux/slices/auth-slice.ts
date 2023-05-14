import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../constants/types';

const initialState = {
  user: { userType: 'none' } as User,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state = initialState;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
