import { createSlice } from "@reduxjs/toolkit";
import {
  fetchMovies,
  fetchSearchMovies,
} from "../asyncThunks/mainPage/asunkThunksMainPage";

const initialState = {
  topMovies: [],
  searchMovies: [],
  status: null,
  error: null,
  language: "en",
  languages: [],
  search: "",
  category: "Popular",
  api_category: "popular",
  categories: [
    { name: "Popular", api_name: "popular" },
    { name: "Top rated", api_name: "top_rated" },
    { name: "Upcoming", api_name: "upcoming" },
  ],
  currentPage: 1,
  totalPages: [],
  totalPagesNumber: 5,
  pageSize: 20,
};

const mainPageSlice = createSlice({
  name: "mainPage",
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
    },
    setSearchData(state, action) {
      state.search = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setApiCategory(state, action) {
      state.api_category = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.topMovies = action.payload.results;
      state.topMovies = action.payload.results;
      state.totalPagesNumber = action.payload.total_pages;
      for (let i = 0; i < action.payload.total_pages; i++)
        state.totalPages.push(i);
    },
    [fetchMovies.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [fetchSearchMovies.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.searchMovies = action.payload;
    },
    [fetchSearchMovies.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.searchMovies = action.payload;
    },
    [fetchSearchMovies.pending]: (state, action) => {
      state.status = "loading";
      state.error = action.payload;
    },
  },
});

export const {
  setLanguage,
  setSearchData,
  setCategory,
  setApiCategory,
  setCurrentPage,
} = mainPageSlice.actions;

export default mainPageSlice.reducer;
