import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

import {
  fetchImagesMovie,
  fetchMovie,
  fetchMovieCast,
  fetchRecommendationsMovie,
} from "../../store/asyncThunks/movieDetailsPage/asyncThunkMovieDetailsPage";
import queryString from "querystring";
import { setLanguageFromUrl } from "../../store/reducers/movieDetailsPageSlice";

export function MovieDetailsPageSideEffects() {
  const location = useNavigate();
  const dispatch = useDispatch();
  const history = useLocation();

  const movieIdFromUrl = useParams().id;

  const parsed = queryString.parse(history.search.substr(1));
  const languageFromUrl = parsed.lang;

  const { movieId, language, search, api_category, currentPage, movieName } =
    useSelector((state) => state.mainPageSlice);

  const { movieData, images, recommendationsMovie, movieCast, status, load } =
    useSelector((state) => state.movieDetailsPageSlice);

  useEffect(() => {
    dispatch(setLanguageFromUrl(languageFromUrl));

    let actualLanguage = language;

    if (parsed.lang) actualLanguage = parsed.lang;

    dispatch(fetchMovie({ actualLanguage, movieIdFromUrl }));
    dispatch(fetchImagesMovie({ actualLanguage, movieIdFromUrl }));
    dispatch(fetchRecommendationsMovie({ actualLanguage, movieIdFromUrl }));
    dispatch(fetchMovieCast({ actualLanguage, movieIdFromUrl }));
  }, [
    dispatch,
    history.search,
    api_category,
    currentPage,
    languageFromUrl,
    language,
    parsed.filter,
    parsed.lang,
    parsed.page,
    search.length,
    movieIdFromUrl,
  ]);

  useEffect(() => {
    if (search) {
      location(
        `?filter=${api_category}&name=${movieName}&lang=${language}&search=${search}`
      );
    } else {
      location(`?filter=${api_category}&name=${movieName}&lang=${language}`);
    }
  }, [language, search, location, api_category, movieName]);

  return {
    movieData,
    images,
    recommendationsMovie,
    movieCast,
    movieId,
    status,
    load,
  };
}
