import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  fetchMovies,
  fetchSearchMovies,
} from "../../store/asyncThunks/mainPage/asyncThunksMainPage";

import { useLocation, useNavigate } from "react-router";
import * as queryString from "querystring";
import {
  setCategoryFromUrl,
  setLanguageFromUrl,
  setPageFromUrl,
  setSearchFromUrl,
} from "../../store/reducers/mainPageSlice";

export function SideEffect() {
  const location = useNavigate();
  const dispatch = useDispatch();
  const history = useLocation();

  const parsed = queryString.parse(history.search.substr(1));

  const pageFromUrl = parsed.page;
  const categoryFromUrl = parsed.filter;
  const languageFromUrl = parsed.lang;

  const {
    status,
    topMovies,
    language,
    search,
    searchMovies,
    api_category,
    currentPage,
    error,
    load,
    searchFromUrl,
  } = useSelector((state) => state.mainPageSlice);

  useEffect(() => {
    dispatch(setPageFromUrl(+pageFromUrl));
    dispatch(setCategoryFromUrl(categoryFromUrl));
    dispatch(setLanguageFromUrl(languageFromUrl));

    let actualPage = currentPage;
    let actualCategory = api_category;
    let actualLanguage = language;

    if (parsed.page) actualPage = +parsed.page;

    if (parsed.filter) actualCategory = parsed.filter;

    if (parsed.lang) actualLanguage = parsed.lang;

    if (search.length === 0)
      dispatch(fetchMovies({ actualLanguage, actualCategory, actualPage }));
  }, [
    dispatch,
    history.search,
    api_category,
    currentPage,
    pageFromUrl,
    languageFromUrl,
    categoryFromUrl,
    language,
    parsed.filter,
    parsed.lang,
    parsed.page,
    search.length,
  ]);

  useEffect(() => {
    console.log(parsed);
    if (search.length > 0) {
      let actualSearch = search;
      let actualLanguage = language;

      if (parsed.search !== undefined) {
        actualSearch = parsed.search;
        console.log(actualSearch);
        dispatch(setSearchFromUrl(actualSearch));
      }
      if (parsed.search === undefined) {
        dispatch(setSearchFromUrl(""));
      }

      dispatch(fetchSearchMovies({ actualLanguage, actualSearch }));
    }
  }, [search, dispatch, language, parsed.search, parsed.lang]);

  useEffect(() => {
    if (search.length === 0)
      location(`?filter=${api_category}&page=${currentPage}&lang=${language}`);
    dispatch(setSearchFromUrl(""));
    if (search) {
      dispatch(setSearchFromUrl(search));
      location(
        `?filter=${api_category}&page=${currentPage}&lang=${language}&search=${search}`
      );
    }
  }, [currentPage, language, api_category, location, search, dispatch]);

  return {
    status,
    topMovies,
    search,
    searchMovies,
    error,
    dispatch,
    load,
    searchFromUrl,
  };
}
