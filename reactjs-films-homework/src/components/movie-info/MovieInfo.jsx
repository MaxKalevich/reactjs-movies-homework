import styles from "./movie-info-style.module.scss";
import MovieBanner from "../movie-banner/MovieBanner";

const MovieInfo = ({
  estimation,
  description,
  title,
  image,
  duration,
  revenue,
  releaseDate,
}) => {
  return (
    <>
      <MovieBanner estimation={estimation} image={image} />
      <div className={styles.movieInformation}>
        <h1 className={styles.movieTitle}>{title}</h1>
        <h3>Description</h3>
        <p className={styles.movieDescription}>{description}</p>
        <h3>Release Date</h3>
        <p className={styles.releaseDate}>{releaseDate}</p>
        <h3>Revenue</h3>
        <p className={styles.revenue}>{revenue}</p>
        <h3>Duration</h3>
        <p className={styles.duration}>{duration}</p>
      </div>
    </>
  );
};

export default MovieInfo;
