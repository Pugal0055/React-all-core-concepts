import { createSlice } from "@reduxjs/toolkit";

const ACCESS_TOKEN_KEY = "access_token";

const initialAuthState = {
  isAuthentication: !!localStorage.getItem(ACCESS_TOKEN_KEY),
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthentication = true;
      localStorage.setItem(ACCESS_TOKEN_KEY, "true");
    },
    logout(state) {
      state.isAuthentication = false;
      localStorage.removeItem(ACCESS_TOKEN_KEY);
    },
  },
});

export const authenticateLogin = ({ username, password }: any): any => {
  return async (dispatch: any) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error("Authentication failed!");
      }
      dispatch(authAction.login());
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

export const authAction = authenticationSlice.actions;

export default authenticationSlice.reducer;
