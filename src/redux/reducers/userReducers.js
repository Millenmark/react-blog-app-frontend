import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("account")
    ? JSON.parse(localStorage.getItem("account"))
    : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, { payload }) => {
      state.userInfo = payload;
    },
    resetUserInfo: (state) => {
      state.userInfo = null;
    },
  },
});

export const { setUserInfo, resetUserInfo } = userSlice.actions;

export default userSlice.reducer;
