import { createSlice } from "@reduxjs/toolkit";
import {
  fetchActorData,
  fetchActorImages,
  fetchKnownBy,
} from "../asyncThunks/actorPage/asyncThunkActorPage";

const initialState = {
  actorData: [],
  knownBy: [],
  actorImages: [],
  status: "",
  error: "",
};

const actorPageSlice = createSlice({
  name: "movie/actorPage",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchActorData.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchActorData.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.actorData = [action.payload];
    },
    [fetchActorData.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [fetchKnownBy.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchKnownBy.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.knownBy = action.payload.cast;
      state.knownBy.length = 20;
    },
    [fetchKnownBy.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [fetchActorImages.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchActorImages.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.actorImages = action.payload.profiles;
      state.knownBy.length = 20;
    },
    [fetchActorImages.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default actorPageSlice.reducer;
