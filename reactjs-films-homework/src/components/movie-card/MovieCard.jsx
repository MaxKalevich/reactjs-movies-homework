import styles from "./movie-card-style.module.scss";

const MovieCard = ({ movieTitle, estimation, genre, movieImage, setPage }) => {
  return (
    <div className={styles.card} onClick={() => setPage("movieDetails")}>
      <span className={styles.estimationMovie}>{estimation}</span>
      <img
        className={styles.movieImage}
        src={movieImage ? movieImage : "movie-picture-mock.jpg"}
        alt="movie banner"
      />
      <div className={styles.movieInfo}>
        <h2 className={styles.titleCard}>{movieTitle}</h2>
        <span>{genre}</span>
      </div>
    </div>
  );
};

export default MovieCard;
