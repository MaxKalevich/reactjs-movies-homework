import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";

import {
  fetchImagesMovie,
  fetchMovie,
  fetchMovieCast,
  fetchRecommendationsMovie,
} from "../../store/asyncThunks/movieDetailsPage/asyncThunkMovieDetailsPage";

export function MovieDetailsPageSideEffects() {
  const dispatch = useDispatch();

  const { movieId, language, movieName } = useSelector(
    (state) => state.mainPageSlice
  );

  const { movieData, images, recommendationsMovie, movieCast, status, load } =
    useSelector((state) => state.movieDetailsPageSlice);

  const movieIdFromUrl = useParams().id;

  useEffect(() => {
    dispatch(fetchMovie({ language, movieIdFromUrl }));
    dispatch(fetchImagesMovie({ language, movieIdFromUrl }));
    dispatch(fetchRecommendationsMovie({ language, movieIdFromUrl }));
    dispatch(fetchMovieCast({ language, movieIdFromUrl }));
  }, [language, movieName, movieIdFromUrl, dispatch]);

  return {
    movieData,
    images,
    recommendationsMovie,
    movieCast,
    movieId,
    status,
    load,
    language,
  };
}
