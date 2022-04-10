import MainPageContainer from "../pages/main-page/MainPageContainer";
import MovieDetailsPage from "../pages/movie-details-page/MovieDetailsPage";
import ActorProfilePage from "../pages/actor-profile-page/ActorProfilePage";

export const routes = [
  {
    title: "mainPage",
    path: "/",
    component: <MainPageContainer />,
  },
  {
    title: "moviePage",
    path: "/movie/:id",
    component: <MovieDetailsPage />,
  },
  {
    title: "movieDetailsPage",
    path: "/movieDetails/:id",
    component: <MovieDetailsPage />,
  },
  {
    title: "actorPage",
    path: "/movie/:id/actor/:actorId",
    component: <ActorProfilePage />,
  },
  {
    title: "actorProfilePage",
    path: "/movieDetails/:id/actor/:actorId",
    component: <ActorProfilePage />,
  },
  {
    title: "NoFoundPage",
    path: "*",
    component: (
      <main style={{ padding: "1rem" }}>
        <p>There's nothing here!</p>
      </main>
    ),
  },
];
