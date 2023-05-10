import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialAuthState = { isAuthentication: false };

export const authenticateUser = createAsyncThunk(
  "authentication",

  async ({ username, password }: any) => {
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

      const data = await response.json();
      return data.user;
    } catch (error: any) {
      console.log(error.message);
      return error.message;
    }
  }
);

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    logout(state) {
      state.isAuthentication = false;
    },
  },
  extraReducers: {
    [`${authenticateUser.fulfilled}`]: (state: any, action: any) => {
      console.log(action, "ful");

      if (action.payload === "Authentication failed!") {
        state.isAuthentication = false;
      } else {
        state.isAuthentication = true;
      }
    },
    [`${authenticateUser.rejected}`]: (state: any, action: any) => {
      state.isAuthentication = false;
      console.log(action, "reject");
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
