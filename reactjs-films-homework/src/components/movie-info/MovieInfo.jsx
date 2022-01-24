import styles from "./movie-info-style.module.scss";
import MovieBanner from "../movie-banner/MovieBanner";

const MovieInfo = ({ movieDetailsPageMockData }) => {
  return (
    <>
      {movieDetailsPageMockData.map((movie) => {
        return (
          <>
            <MovieBanner
              estimation={movie.estimation}
              image={movie.movieImage}
              key={movie.movieImage}
            />
            <div className={styles.movieInformation} key={movie.movieImage}>
              <h1 className={styles.movieTitle}>{movie.movieTitle}</h1>
              <h3>Description</h3>
              <p className={styles.movieDescription}>{movie.description}</p>
              <h3>Release Date</h3>
              <p className={styles.releaseDate}>{movie.releaseDate}</p>
              <h3>Revenue</h3>
              <p className={styles.revenue}>{movie.revenue}</p>
              <h3>Duration</h3>
              <p className={styles.duration}>{movie.duration}</p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default MovieInfo;
