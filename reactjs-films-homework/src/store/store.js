import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainPageSlice from "./reducers/mainPageSlice";
import appSlice from "./reducers/appSlice";
import movieDetailsPageSlice from "./reducers/movieDetailsPageSlice";
import actorPageSlice from "./reducers/actorPageSlice";

const rootReducer = combineReducers({
  mainPageSlice,
  appSlice,
  movieDetailsPageSlice,
  actorPageSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: process.env.NODE_ENV !== "production",
});
