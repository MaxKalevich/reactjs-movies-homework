import Header from "./components/header/Header";

import { Route, Routes } from "react-router-dom";

import { ErrorBoundary } from "./components/error-fallback/ErrorFallback";

import MainPageContainer from "./pages/main-page/MainPageContainer";
import ActorProfilePage from "./pages/actor-profile-page/ActorProfilePage";
import MovieDetailsPage from "./pages/movie-details-page/MovieDetailsPage";

import styles from "./app-styles.module.scss";

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <div className={styles.appWrapper}>
          <Routes>
            <Route exact path="/" element={<MainPageContainer />} />
            <Route path="/movie/:id" element={<MovieDetailsPage />} />
            <Route path="/movieDetails/:id" element={<MovieDetailsPage />} />
            <Route
              path="/movie/:id/actor/:actorId"
              element={<ActorProfilePage />}
            />
            <Route
              path="/movieDetails/:id/actor/:actorId"
              element={<ActorProfilePage />}
            />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </div>
      </ErrorBoundary>
    </>
  );
};

// const App = () => {
//     return (
//         <>
//             <ErrorBoundary>
//                 <Header />
//                 <div className={styles.appWrapper}>
//                     <Routes>
//                         <Route exact path="/" element={<MainPageContainer />} />
//                         <Route path="/movie/:id" element={<MovieDetailsPage />} />
//                         <Route
//                             path="/movie/:id/actor/:actorId"
//                             element={<ActorProfilePage />}
//                         />
//                         <Route
//                             path="*"
//                             element={
//                                 <main style={{ padding: "1rem" }}>
//                                     <p>There's nothing here!</p>
//                                 </main>
//                             }
//                         />
//                     </Routes>
//                 </div>
//             </ErrorBoundary>
//         </>
//     );
// };

export default App;
