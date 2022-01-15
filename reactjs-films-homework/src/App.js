import MainPage from "./pages/main-page/MainPage";
import MovieDetailsPage from "./pages/movie-details-page/MovieDetailsPage";
import ActorProfilePage from "./pages/actor-profile-page/ActorProfilePage";
import Header from "./components/header/Header";

import { useState } from "react";

import { ErrorBoundary } from "./components/error-fallback/ErrorFallback";

import "./app-style.scss";

const App = () => {
  const [page, setPage] = useState();
  let content;
  if (page === "movieDetails") {
    content = <MovieDetailsPage setPage={setPage} />;
  } else if (page === "actorDetails") {
    content = <ActorProfilePage setPage={setPage} />;
  } else {
    content = <MainPage setPage={setPage} />;
  }
  return (
    <>
      <ErrorBoundary>
        <Header />
        <div className="app-wrapper">
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
