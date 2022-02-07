import MainPage from "./MainPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchMovies,
  fetchSearchMovies,
} from "../../store/asyncThunks/mainPage/asunkThunksMainPage";
import DownloadSpinner from "../../components/download-spinner/DownloadSpinner";

const MainPageContainer = ({ setPage }) => {
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
  } = useSelector((state) => state.mainPageSlice);

  useEffect(() => {
    if (search.length === 0)
      dispatch(fetchMovies({ language, api_category, currentPage }));

    if (search.length > 0) dispatch(fetchSearchMovies({ language, search }));
  }, [dispatch, language, search, category, api_category, currentPage]);

  if (status === "loading" || status === "loading") return <DownloadSpinner />;
  return (
    <MainPage
      setPage={setPage}
      movies={topMovies}
      searchMovies={searchMovies.results}
      search={search}
    />
  );
};

export default MainPageContainer;
