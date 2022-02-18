import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, KEY } from "../../../service/Api";

export const fetchMovie = createAsyncThunk(
  "movieDetails/movie",
  async function ({ language, movieId }, { rejectWithValue }) {
    try {
      const response = await fetch(
        `${BASE_URL}movie/${movieId}?api_key=${KEY}&language=${language}`
      );
      if (!response.ok) {
        throw new Error("An error occurred...No Data");
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchImagesMovie = createAsyncThunk(
  "movieDetails/images",
  async function ({ language, movieId }, { rejectWithValue }) {
    try {
      const response = await fetch(
        `${BASE_URL}movie/${movieId}/images?api_key=${KEY}&language=${language}`
      );
      if (!response.ok) {
        throw new Error("An error occurred...No Data");
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchRecommendationsMovie = createAsyncThunk(
  "movieDetails/recommendationsMovie",
  async function ({ language, movieId }, { rejectWithValue }) {
    try {
      const response = await fetch(
        `${BASE_URL}movie/${movieId}/recommendations?api_key=${KEY}&language=${language}&page=1`
      );
      if (!response.ok) {
        throw new Error("An error occurred...No Data");
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchMovieCast = createAsyncThunk(
  "movieDetails/movieCast",
  async function ({ language, movieId }, { rejectWithValue }) {
    try {
      const response = await fetch(
        `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=${language}&page=1`
      );
      if (!response.ok) {
        throw new Error("An error occurred...No Data");
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
