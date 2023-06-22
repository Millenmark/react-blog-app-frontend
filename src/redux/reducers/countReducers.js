import { createSlice } from "@reduxjs/toolkit";

const initialState = { number: 0 };

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.number += 1;
    },
    decrement: (state) => {
      state.number -= 1;
    },
  },
});

export const { increment, decrement } = countSlice.actions;

export default countSlice.reducer;
