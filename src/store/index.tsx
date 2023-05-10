import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter";

// import authSlice from "./authThunk" *** Thunk Hook ***;

import authSlice from "./authOwnThunk";
import authentication from "./authentication";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
    authentication: authentication,
  },
});

export default store;
