import MainPage from "./MainPage";
import DownloadSpinner from "../../components/download-spinner/DownloadSpinner";
import NotFoundComponent from "../../components/not-found-component/NotFoundComponent";

import { SideEffect } from "./mainPageSideEffect";

const MainPageContainer = ({ setPage }) => {
  const funcSideEffect = SideEffect();
  const { status, topMovies, search, searchMovies, error } = funcSideEffect;
  if (status === "loading") return <DownloadSpinner />;
  if (status === "rejected") return <NotFoundComponent message={error} />;
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
