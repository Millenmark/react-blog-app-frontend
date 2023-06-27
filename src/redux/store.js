import { configureStore } from "@reduxjs/toolkit";
import xxx from "./reducers/countReducers";
import user from "./reducers/userReducers";

const store = configureStore({
  reducer: {
    xxx,
    user,
  },
});

export default store;
