import styles from "./movie-banner-style.module.scss";

const MovieBanner = ({ estimation, image }) => {
  return (
    <div className={styles.movieBanner}>
      <span className={styles.estimation}>{estimation}</span>
      <img
        className={styles.movieImage}
        src={
          image
            ? `https://image.tmdb.org/t/p/w220_and_h330_face${image}`
            : "movie-picture-mock.jpg"
        }
        alt="movie-banner"
      />
    </div>
  );
};

export default MovieBanner;
