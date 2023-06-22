import { configureStore } from "@reduxjs/toolkit";
import xxx from "./reducers/countReducers";

const store = configureStore({
  reducer: {
    xxx,
  },
});

export default store;
