import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthentication: false };

interface dispatchAction {
  username: string;
  password: string;
}

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthentication = true;
    },

    logout(state) {
      state.isAuthentication = false;
    },
  },
});

export const authenticateUser = ({ username, password }: any): any => {
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

export const authAction = authSlice.actions;

export default authSlice.reducer;
