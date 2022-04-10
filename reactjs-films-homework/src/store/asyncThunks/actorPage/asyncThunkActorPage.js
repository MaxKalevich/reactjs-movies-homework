import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, KEY } from "../../../service/Api";

export const fetchActorData = createAsyncThunk(
  "actorPage/actorData",
  async function ({ language, actorIdFromUrl }, { rejectWithValue }) {
    try {
      const response = await fetch(
        `${BASE_URL}person/${actorIdFromUrl}?api_key=${KEY}&language=${language}`
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

export const fetchKnownBy = createAsyncThunk(
  "movieDetails/knownBy",
  async function ({ language, actorIdFromUrl }, { rejectWithValue }) {
    try {
      const response = await fetch(
        `${BASE_URL}person/${actorIdFromUrl}/movie_credits?api_key=${KEY}&language=${language}`
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

export const fetchActorImages = createAsyncThunk(
  "movieDetails/actorImages",
  async function ({ language, actorIdFromUrl }, { rejectWithValue }) {
    try {
      const response = await fetch(
        `${BASE_URL}person/${actorIdFromUrl}/images?api_key=${KEY}&language=${language}&page=1`
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
