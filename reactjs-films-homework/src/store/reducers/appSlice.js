import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const { setPage } = appSlice.actions;

export default appSlice.reducer;
