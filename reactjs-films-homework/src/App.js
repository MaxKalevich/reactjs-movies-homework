import MainPage from "./pages/main-page/MainPage";
import MovieDetailsPage from "./pages/movie-details-page/MovieDetailsPage";
import ActorProfilePage from "./pages/actor-profile-page/ActorProfilePage";
import Header from "./components/header/Header";

import { ErrorBoundary } from "./components/error-fallback/ErrorFallback";

import "./app-style.scss";

const App = () => (
  <>
    <ErrorBoundary>
      <Header />
      <div className="app-wrapper">
        <MainPage />
        {/*<MovieDetailsPage />*/}
        {/*<ActorProfilePage />*/}
      </div>
    </ErrorBoundary>
  </>
);

export default App;
