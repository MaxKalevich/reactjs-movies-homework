import MainPage from "./MainPage";
import DownloadSpinner from "../../components/download-spinner/DownloadSpinner";
import NotFoundComponent from "../../components/not-found-component/NotFoundComponent";

import { SideEffect } from "./mainPageSideEffect";

const MainPageContainer = () => {
  const funcSideEffect = SideEffect();
  const { status, topMovies, search, searchMovies, error } = funcSideEffect;
  if (status === "loading") return <DownloadSpinner />;
  if (status === "rejected") return <NotFoundComponent message={error} />;
  return (
    <MainPage
      topMovies={topMovies}
      searchMovies={searchMovies}
      search={search}
    />
  );
};

export default MainPageContainer;
