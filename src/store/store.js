import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user.js";

export const initialState = {
  value: null,
  connected: "false",
  token: "",
  user: {
    prenom: "",
    nom: "",
  },
};

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
