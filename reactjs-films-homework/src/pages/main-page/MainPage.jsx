import MovieCard from "../../components/movie-card/MovieCard";
import PaginationContainer from "../../components/pagination/PaginationContainer";
import SwitchPanelContainer from "../../components/switch-panel/SwitchPanelContainer";

import { Link } from "react-router-dom";

import styles from "./main-page_style.module.scss";

const MainPage = ({
  setPage,
  topMovies,
  searchMovies,
  searchFromUrl,
  api_category,
  language,
  search,
}) => {
  const moviesData =
    topMovies !== undefined &&
    topMovies.map((movie) => {
      return (
        <Link
          className={styles.link}
          to={`movie/${movie.id}?filter=${api_category}&name=${movie.title}&lang=${language}`}
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
    search !== undefined &&
    searchMovies.map((movie, index) => {
      return (
        <Link
          className={styles.link}
          to={`movie/${movie.id}?filter=${api_category}&name=${movie.title}&lang=${language}&search=${search}`}
          key={movie.id}
        >
          <MovieCard
            movieTitle={movie.title}
            movieImage={movie.poster_path}
            estimation={movie.vote_average}
            genre={movie.genre}
            setPage={setPage}
            key={movie.title + index}
          />
        </Link>
      );
    });

  return (
    <section className={styles.mainPage}>
      <SwitchPanelContainer />
      <main className={styles.cardContainer}>
        {searchFromUrl !== undefined &&
          searchFromUrl.length !== 0 &&
          searchMovies.length === 0 && <h2>NO RESULTS FOUND</h2>}
        {(search !== undefined && search.length) || searchFromUrl
          ? searchMoviesData
          : moviesData}
      </main>
      <PaginationContainer />
    </section>
  );
};

export default MainPage;
