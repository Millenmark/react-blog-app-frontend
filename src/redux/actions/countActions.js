import { increment, decrement } from "../reducers/countReducers";

export const changeCount = (type) => (dispatch) => {
  if (type === "INCREASE") {
    dispatch(increment());
  } else {
    dispatch(decrement());
  }
};
