import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  value: null,
  connected: "false",
  token: "",
  user: {
    prenom: "",
    nom: "",
  },
};

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
