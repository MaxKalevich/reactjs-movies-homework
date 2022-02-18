import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchImagesMovie,
  fetchMovie,
  fetchMovieCast,
  fetchRecommendationsMovie,
} from "../../store/asyncThunks/movieDetailsPage/asyncThunkMovieDetailsPage";

export function MovieDetailsPageSideEffects() {
  const dispatch = useDispatch();
  const { movieId, language } = useSelector((state) => state.mainPageSlice);
  const { movieData, images, recommendationsMovie, movieCast } = useSelector(
    (state) => state.movieDetailsPageSlice
  );
  useEffect(() => {
    dispatch(fetchMovie({ language, movieId }));
    dispatch(fetchImagesMovie({ language, movieId }));
    dispatch(fetchRecommendationsMovie({ language, movieId }));
    dispatch(fetchMovieCast({ language, movieId }));
  }, [language, dispatch, movieId]);
  return {
    movieData,
    images,
    recommendationsMovie,
    movieCast,
  };
}
