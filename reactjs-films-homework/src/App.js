import MovieDetailsPage from "./pages/movie-details-page/MovieDetailsPage";
import ActorProfilePage from "./pages/actor-profile-page/ActorProfilePage";
import Header from "./components/header/Header";

import { useState } from "react";

import { ErrorBoundary } from "./components/error-fallback/ErrorFallback";

import styles from "./app-styles.module.scss";
import MainPageContainer from "./pages/main-page/MainPageContainer";
import MovieDetailsPageContainer from "./pages/movie-details-page/MovieDetailsPageContainer";
import ActorProfilePageContainer from "./pages/actor-profile-page/ActorProfilePageContainer";

const App = () => {
  const [page, setPage] = useState();
  let content;
  if (page === "movieDetails") {
    content = <MovieDetailsPageContainer setPage={setPage} />;
  } else if (page === "actorDetails") {
    content = <ActorProfilePageContainer setPage={setPage} />;
  } else {
    content = <MainPageContainer setPage={setPage} />;
  }
  return (
    <>
      <ErrorBoundary>
        <Header />
        <div className={styles.appWrapper}>
          {content}
          {/*<MainPage />*/}
          {/*<MovieDetailsPage />*/}
          {/*<ActorProfilePage />*/}
        </div>
      </ErrorBoundary>
    </>
  );
};

export default App;
