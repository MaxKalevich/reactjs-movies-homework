import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchImagesMovie,
  fetchMovie,
  fetchMovieCast,
  fetchRecommendationsMovie,
} from "../../store/asyncThunks/movieDetailsPage/asyncThunkMovieDetailsPage";
import { useParams } from "react-router";

export function MovieDetailsPageSideEffects() {
  const dispatch = useDispatch();
  const movieIdFromUrl = useParams().id;
  const { movieId, language } = useSelector((state) => state.mainPageSlice);
  const { movieData, images, recommendationsMovie, movieCast, status } =
    useSelector((state) => state.movieDetailsPageSlice);

  useEffect(() => {
    dispatch(fetchMovie({ language, movieIdFromUrl }));
    dispatch(fetchImagesMovie({ language, movieIdFromUrl }));
    dispatch(fetchRecommendationsMovie({ language, movieIdFromUrl }));
    dispatch(fetchMovieCast({ language, movieIdFromUrl }));
  }, [language, dispatch, movieId, movieIdFromUrl]);
  return {
    movieData,
    images,
    recommendationsMovie,
    movieCast,
    movieId,
    status,
  };
}
