import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../store";

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login(state, action) {
      const { prenom, nom, token } = action.payload;
      state.prenom = prenom;
      state.nom = nom;
      state.token = token;
      state.connected = true;
    },
    logout(state) {
      state.prenom = "";
      state.nom = "";
      state.token = "";
      state.connected = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
