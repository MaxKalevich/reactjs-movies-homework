import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, KEY } from "../../../service/Api";

export const fetchMovies = createAsyncThunk(
  "movies/categoryMovie",
  async function (
    { lang = "en", category = "popular", page = 1 },
    { rejectWithValue }
  ) {
    try {
      const response = await fetch(
        `${BASE_URL}movie/${category}?api_key=${KEY}&language=${
          lang ? lang : "en"
        }&page=${page}&include_adult=false`
      );
      if (!response.ok) {
        throw new Error(
          "Something went wrong... we apologize for the inconvenience caused."
        );
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchSearchMovies = createAsyncThunk(
  "movies/searchMovies",
  async function (
    { actualLanguage = "en", actualSearch },
    { rejectWithValue }
  ) {
    try {
      const response = await fetch(
        `${BASE_URL}search/movie?api_key=${KEY}&language=${actualLanguage}&page=1&query=${actualSearch}`
      );
      if (!response.ok) {
        throw new Error("No Data");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  "movies/categories",
  async function ({ language, search }, { rejectWithValue }) {
    try {
      const response = await fetch(
        `${BASE_URL}search/movie?api_key=${KEY}&language=${language}&page=1&query=${search}`
      );
      if (!response.ok) {
        throw new Error("No Data");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
