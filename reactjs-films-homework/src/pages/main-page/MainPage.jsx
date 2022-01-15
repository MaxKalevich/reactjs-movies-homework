import MovieCard from "../../components/movie-card/MovieCard";
import SwitchPanel from "../../components/switch-panel/ControlPanel";

import "./main-page_style.scss";

const MainPage = ({ setPage }) => {
  return (
    <section className="main-page">
      <SwitchPanel />
      <main className="main-page__card-container">
        <MovieCard
          movieImage=""
          genre="Drama"
          movieTitle="Home Alone 3"
          estimation="9.97"
          setPage={setPage}
        />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </main>
    </section>
  );
};

export default MainPage;
