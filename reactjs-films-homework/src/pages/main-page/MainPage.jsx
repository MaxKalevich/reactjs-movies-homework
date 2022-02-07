import MovieCard from "../../components/movie-card/MovieCard";
import PaginationContainer from "../../components/pagination/PaginationContainer";

import styles from "./main-page_style.module.scss";
import SwitchPanelContainer from "../../components/switch-panel/SwitchPanelContainer";

const MainPage = ({ setPage, movies, searchMovies, search }) => {
  const moviesData =
    movies !== undefined &&
    movies.map((movie) => {
      return (
        <MovieCard
          movieTitle={movie.title}
          movieImage={movie.poster_path}
          estimation={movie.vote_average}
          date={movie.release_date}
          setPage={setPage}
          key={movie.title}
        />
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
        {search.length ? searchMoviesData : moviesData}
        {searchMovies !== undefined && searchMovies.length === 0 && (
          <h2>NO RESULTS FOUND</h2>
        )}
      </main>
      <PaginationContainer />
    </section>
  );
};

export default MainPage;
