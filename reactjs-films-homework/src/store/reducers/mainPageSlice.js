import { createSlice } from "@reduxjs/toolkit";
import {
  fetchMovies,
  fetchSearchMovies,
} from "../asyncThunks/mainPage/asyncThunksMainPage";

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
  movieId: "",
  movieName: "",
  pageFromUrl: 1,
  categoryFromUrl: "popular",
  languageFromUrl: "en",
  searchFromUrl: "",
  load: false,
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
    setMovieId(state, action) {
      state.movieId = action.payload;
    },
    setMovieName(state, action) {
      state.movieName = action.payload;
    },
    setLoading(state, action) {
      state.load = action.payload;
    },
    setPageFromUrl(state, action) {
      state.pageFromUrl = action.payload;
    },
    setCategoryFromUrl(state, action) {
      state.categoryFromUrl = action.payload;
    },
    setLanguageFromUrl(state, action) {
      state.languageFromUrl = action.payload;
    },
    setSearchFromUrl(state, action) {
      state.searchFromUrl = action.payload;
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
      state.searchMovies = action.payload.results;
    },
    [fetchSearchMovies.pending]: (state, action) => {
      state.status = "loading";
      state.error = action.payload;
    },
    [fetchSearchMovies.rejected]: (state, action) => {
      state.status = "rejected";
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
  setMovieId,
  setLoading,
  setMovieName,
  setPageFromUrl,
  setCategoryFromUrl,
  setLanguageFromUrl,
  setSearchFromUrl,
} = mainPageSlice.actions;

export default mainPageSlice.reducer;
