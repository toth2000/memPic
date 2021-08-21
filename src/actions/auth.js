import { AUTH, LOGOUT } from "../constants/actionTypes";
import * as api from "../api/index";

export const updateUser = (result, token) => async (dispatch) => {
  dispatch({ type: AUTH, payload: { result, token } });
};

export const removeUser = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    const action = { type: AUTH, payload: data };
    dispatch(action);
    history.push("/");
  } catch (error) {
    console.log("SignIn Action Error", error);
  }
};

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    const action = { type: AUTH, payload: data };
    dispatch(action);
    history.push("/");
  } catch (error) {
    console.log("SignUp Action Error", error);
  }
};
