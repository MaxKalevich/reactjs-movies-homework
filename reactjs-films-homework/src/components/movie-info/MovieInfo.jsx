import MovieBanner from "../movie-banner/MovieBanner";

import styles from "./movie-info-style.module.scss";

const MovieInfo = ({
  estimation,
  description,
  title,
  image,
  website,
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
        <p className={styles.revenue}>{`${revenue}$`}</p>
        <h3>Website</h3>
        <a href={website} className={styles.website}>
          {website}
        </a>
      </div>
    </>
  );
};

export default MovieInfo;
