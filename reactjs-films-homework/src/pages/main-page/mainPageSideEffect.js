import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import {
  fetchMovies,
  fetchSearchMovies,
} from "../../store/asyncThunks/mainPage/asyncThunksMainPage";
import queryString from "querystring";
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

  const {
    status,
    topMovies,
    language,
    search,
    searchMovies,
    api_category,
    pageFromUrl,
    currentPage,
    error,
    load,
    searchFromUrl,
    categoryFromUrl,
    languageFromUrl,
  } = useSelector((state) => state.mainPageSlice);

  // Fetch Data
  useEffect(() => {
    const parsed = queryString.parse(history.search.substr(1));
    if (search.length === 0) {
      if (parsed.filter === undefined) parsed.filter = categoryFromUrl;
      if (parsed.page === undefined) parsed.page = pageFromUrl;
      if (parsed.lang === undefined) parsed.lang = languageFromUrl;

      let category = parsed.filter;
      let page = parsed.page;
      let lang = parsed.lang;

      dispatch(fetchMovies({ lang, category, page }));
    }
  }, [
    dispatch,
    history.search,
    categoryFromUrl,
    language,
    languageFromUrl,
    pageFromUrl,
    search.length,
  ]);

  // Initial URL
  useEffect(() => {
    const parsed = queryString.parse(history.search.substr(1));

    if (parsed.filter === categoryFromUrl || parsed.filter === undefined) {
      if (search.length === 0) {
        location(
          `?filter=${api_category}&page=${currentPage}&lang=${language}`
        );
      }
    }
  }, [api_category, currentPage, language, location, search.length]);

  // Check URL
  useEffect(() => {
    const parsed = queryString.parse(history.search.substr(1));

    dispatch(setPageFromUrl(+parsed.page));
    dispatch(setCategoryFromUrl(parsed.filter));
    dispatch(setLanguageFromUrl(parsed.lang));
  }, [dispatch, history.search]);

  // Search
  useEffect(() => {
    const parsed = queryString.parse(history.search.substr(1));
    let actualSearch = searchFromUrl;

    dispatch(setSearchFromUrl(parsed.search));
    if (parsed.search) parsed.search = actualSearch;
    if (parsed.search === "undefined") parsed.search = "";
    if (actualSearch) {
      actualSearch = search;
      console.log(actualSearch);
      let actualLanguage = language;

      dispatch(setSearchFromUrl(""));
      location(
        `?filter=${parsed.filter}&page=${parsed.page}&lang=${
          parsed.lang
        }&search=${actualSearch ? actualSearch : parsed.search}`
      );
      if (parsed.search) {
        actualSearch = parsed.search;
        dispatch(setSearchFromUrl(actualSearch));
      }
      dispatch(fetchSearchMovies({ actualLanguage, actualSearch }));
    }
  }, [search, searchFromUrl, dispatch, location, history.search]);

  return {
    status,
    topMovies,
    search,
    searchMovies,
    error,
    dispatch,
    load,
    searchFromUrl,
    api_category,
    language,
  };
}
