import * as api from "../api";

export const register = (authdata, navigate) => async (dispatch) => {
  try {
    const { data } = await api.Register(authdata);
    console.log(data);

  } catch (error) {
    console.log(error);
  }
};

export const login = (authdata, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authdata);
    console.log(data);
    localStorage.setItem("name",data.result.name)
    localStorage.setItem("token", data.token)
    navigate("/home");
  } catch (error) {
    console.log(error);
  }
};