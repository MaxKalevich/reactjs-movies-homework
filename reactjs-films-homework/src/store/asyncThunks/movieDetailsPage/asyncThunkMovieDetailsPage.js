import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, KEY } from "../../../service/Api";

export const fetchMovie = createAsyncThunk(
  "movieDetails/movie",
  async function (
    { actualLanguage, movieIdFromUrl },
    { rejectWithValue }
  ) {
    try {
      const response = await fetch(
        `${BASE_URL}movie/${movieIdFromUrl}?api_key=${KEY}&language=${actualLanguage}`
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
  async function ({ actualLanguage, movieIdFromUrl }, { rejectWithValue }) {
    try {
      const response = await fetch(
        `${BASE_URL}movie/${movieIdFromUrl}/images?api_key=${KEY}&language=${actualLanguage}`
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
  async function ({ actualLanguage, movieIdFromUrl }, { rejectWithValue }) {
    try {
      const response = await fetch(
        `${BASE_URL}movie/${movieIdFromUrl}/recommendations?api_key=${KEY}&language=${actualLanguage}&page=1`
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
  async function ({ actualLanguage, movieIdFromUrl }, { rejectWithValue }) {
    try {
      const response = await fetch(
        `${BASE_URL}movie/${movieIdFromUrl}/credits?api_key=${KEY}&language=${actualLanguage}&page=1`
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
