import Header from "./components/header/Header";

import { useSelector } from "react-redux";

import { ErrorBoundary } from "./components/error-fallback/ErrorFallback";
import MainPageContainer from "./pages/main-page/MainPageContainer";

import { setPage } from "./store/reducers/appSlice";

import styles from "./app-styles.module.scss";
import ActorProfilePage from "./pages/actor-profile-page/ActorProfilePage";
import MovieDetailsPage from "./pages/movie-details-page/MovieDetailsPage";

const App = () => {
  const { page } = useSelector((state) => state.appSlice);
  let content;
  if (page === "movieDetails") {
    content = <MovieDetailsPage />;
  } else if (page === "actorDetails") {
    content = <ActorProfilePage />;
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
