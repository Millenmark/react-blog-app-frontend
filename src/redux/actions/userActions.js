import { resetUserInfo } from "../reducers/userReducers";

export const logout = () => (dispatch) => {
  dispatch(resetUserInfo());
  localStorage.removeItem("account");
};
