import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchMovies,
  fetchSearchMovies,
} from "../../store/asyncThunks/mainPage/asyncThunksMainPage";

export function SideEffect() {
  const dispatch = useDispatch();
  const {
    status,
    topMovies,
    language,
    search,
    searchMovies,
    api_category,
    category,
    currentPage,
    error,
    load,
  } = useSelector((state) => state.mainPageSlice);
  useEffect(() => {
    if (search.length === 0)
      dispatch(fetchMovies({ language, api_category, currentPage }));

    if (search.length > 0) dispatch(fetchSearchMovies({ language, search }));
  }, [dispatch, language, search, category, api_category, currentPage]);
  return {
    status,
    topMovies,
    search,
    searchMovies,
    error,
    dispatch,
    load,
  };
}
