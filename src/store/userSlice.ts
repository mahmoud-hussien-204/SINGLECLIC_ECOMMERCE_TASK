import {createSlice} from "@reduxjs/toolkit";

interface InitialState {
  isAuthenticated: boolean;
  userData: IUser | null;
}

const initialState: InitialState = {
  isAuthenticated: false,
  userData: {
    id: "1",
    email: "",
    access_token: "test-access-token",
    avatar_url: "",
    name: "Mahmoud Hussien",
  },
};

export const userSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {},
});

export const userSliceActions = userSlice.actions;
