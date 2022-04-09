import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router";

import {
  fetchImagesMovie,
  fetchMovie,
  fetchMovieCast,
  fetchRecommendationsMovie,
} from "../../store/asyncThunks/movieDetailsPage/asyncThunkMovieDetailsPage";
import queryString from "querystring";

export function MovieDetailsPageSideEffects() {
  const dispatch = useDispatch();
  const history = useLocation();

  const parsed = queryString.parse(history.search.substr(1));

  const { movieId, language, movieName, languageFromUrl } = useSelector(
    (state) => state.mainPageSlice
  );

  const { movieData, images, recommendationsMovie, movieCast, status, load } =
    useSelector((state) => state.movieDetailsPageSlice);

  const movieIdFromUrl = useParams().id;

  console.log(parsed.lang);

  useEffect(() => {
    dispatch(fetchMovie({ language, movieIdFromUrl }));
    dispatch(fetchImagesMovie({ language, movieIdFromUrl }));
    dispatch(fetchRecommendationsMovie({ language, movieIdFromUrl }));
    dispatch(fetchMovieCast({ language, movieIdFromUrl }));
  }, [
    language,
    movieName,
    movieIdFromUrl,
    dispatch,
    languageFromUrl,
    parsed.lang,
  ]);

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
