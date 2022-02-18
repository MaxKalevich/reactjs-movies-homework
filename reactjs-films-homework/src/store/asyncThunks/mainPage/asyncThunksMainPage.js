import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, KEY } from "../../../service/Api";

export const fetchMovies = createAsyncThunk(
  "movies/categoryMovie",
  async function (
    { language, api_category, currentPage },
    { rejectWithValue }
  ) {
    try {
      const response = await fetch(
        `${BASE_URL}movie/${api_category}?api_key=${KEY}&language=${language}&page=${currentPage}&include_adult=false`
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
