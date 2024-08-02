import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  token: string;
  user: object
}

const initialState: IAuthState = {
  token: "",
  user: {}
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<object>) => {
      state.user = action.payload;
    }
  },
});

export const { setToken, setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
