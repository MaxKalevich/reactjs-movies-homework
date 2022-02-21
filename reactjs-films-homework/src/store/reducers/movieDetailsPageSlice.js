import { createSlice } from "@reduxjs/toolkit";
import {
  fetchImagesMovie,
  fetchMovie,
  fetchMovieCast,
  fetchRecommendationsMovie,
} from "../asyncThunks/movieDetailsPage/asyncThunkMovieDetailsPage";

const initialState = {
  movieData: [],
  images: [],
  recommendationsMovie: [],
  movieCast: [],
  currentActorId: "",
  status: "",
  error: "",
  load: false,
};

const movieDetailsPageSlice = createSlice({
  name: "movieDetailsPage",
  initialState,
  reducers: {
    setActorId(state, action) {
      state.currentActorId = action.payload;
    },
    setLoading(state, action) {
      state.load = action.payload;
    },
  },
  extraReducers: {
    [fetchMovie.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchMovie.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.movieData = [action.payload];
    },
    [fetchMovie.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [fetchImagesMovie.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchImagesMovie.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.images = action.payload.posters;
      state.images.length = 6;
    },
    [fetchImagesMovie.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [fetchRecommendationsMovie.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchRecommendationsMovie.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.recommendationsMovie = action.payload.results;
    },
    [fetchRecommendationsMovie.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [fetchMovieCast.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchMovieCast.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.movieCast = action.payload.cast;
    },
    [fetchMovieCast.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { setActorId, setLoading } = movieDetailsPageSlice.actions;

export default movieDetailsPageSlice.reducer;
