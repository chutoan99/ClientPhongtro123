import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/user";

interface initialState {
  login: {
    isLogin: boolean;
    error: boolean;
    success: boolean;
    token: string | null;
    response: User;
  };
  register: {
    isFetching: boolean;
    error: boolean;
    success: boolean;
    token: string | null;
  };
}
const initialStateAuth: initialState = {
  login: {
    isLogin: false,
    error: false,
    success: false,
    token: null,
    response: {} as User,
  },
  register: {
    isFetching: false,
    error: false,
    success: false,
    token: null,
  },
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialStateAuth,
  reducers: {
    // login
    loginStart: (state) => {
      state.login.isLogin = false;
      state.login.error = false;
      state.login.success = false;
    },
    loginSuccess: (state, action: PayloadAction<any>) => {
      state.login.isLogin = true;
      state.login.token = action.payload.token;
      state.login.success = true;
      state.login.response = action.payload.response;
    },
    loginFailed: (state, action: PayloadAction<any>) => {
      state.login.isLogin = false;
      state.login.error = action.payload;
    },

    // register
    registerStart: (state) => {
      state.register.isFetching = false;
      state.register.error = false;
      state.register.success = false;
      state.register.token = null;
    },
    registerSuccess: (state, action: PayloadAction<any>) => {
      state.register.isFetching = false;
      state.register.error = false;
      state.register.success = action.payload.msg;
      state.register.token = action.payload.token;
    },
    registerFailed: (state, action: PayloadAction<any>) => {
      state.register.isFetching = true;
      state.register.error = action.payload.msg;
      state.register.success = false;
      state.register.token = null;
    },
    // update
    updateIdUser: (state) => {
      state.login.isLogin = true;
    },
    // logout
    logoutSuccess: (state) => {
      state.login.isLogin = false;
      state.login.token = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
