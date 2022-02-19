import MovieCard from "../../components/movie-card/MovieCard";
import PaginationContainer from "../../components/pagination/PaginationContainer";
import SwitchPanelContainer from "../../components/switch-panel/SwitchPanelContainer";

import styles from "./main-page_style.module.scss";
import { Link } from "react-router-dom";

const MainPage = ({ setPage, topMovies, searchMovies, search }) => {
  const moviesData =
    topMovies !== undefined &&
    topMovies.map((movie) => {
      return (
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`movie/${movie.id}`}
          key={movie.id}
        >
          <MovieCard
            movieTitle={movie.title}
            movieImage={movie.poster_path}
            estimation={movie.vote_average}
            date={movie.release_date}
            setPage={setPage}
            movieId={movie.id}
            key={movie.id}
          />
        </Link>
      );
    });

  const searchMoviesData =
    searchMovies !== undefined &&
    searchMovies.map((movie, index) => {
      return (
        <MovieCard
          movieTitle={movie.title}
          movieImage={movie.backdrop_path}
          estimation={movie.vote_average}
          genre={movie.genre}
          setPage={setPage}
          key={movie.title + index}
        />
      );
    });

  return (
    <section className={styles.mainPage}>
      <SwitchPanelContainer />
      <main className={styles.cardContainer}>
        {search.length !== 0 && searchMovies.length === 0 && (
          <h2>NO RESULTS FOUND</h2>
        )}
        {search.length ? searchMoviesData : moviesData}
      </main>
      <PaginationContainer />
    </section>
  );
};

export default MainPage;
