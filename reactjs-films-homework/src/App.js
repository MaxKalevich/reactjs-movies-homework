import Header from "./components/header/Header";

import { useSelector } from "react-redux";

import { ErrorBoundary } from "./components/error-fallback/ErrorFallback";
import MainPageContainer from "./pages/main-page/MainPageContainer";
import MovieDetailsPageContainer from "./pages/movie-details-page/MovieDetailsPageContainer";
import ActorProfilePageContainer from "./pages/actor-profile-page/ActorProfilePageContainer";

import { setPage } from "./store/reducers/appSlice";

import styles from "./app-styles.module.scss";

const App = () => {
  const { page } = useSelector((state) => state.appSlice);
  const { error } = useSelector((state) => state.mainPageSlice);
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
          {error && <h2>An error occurred...{error}</h2>}
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
