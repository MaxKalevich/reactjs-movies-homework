import ActorCard from "../../components/actor-card/ActorCard";
import ImageCard from "../../components/image-card/ImageCard";
import MovieCard from "../../components/movie-card/MovieCard";
import MovieInfo from "../../components/movie-info/MovieInfo";

import styles from "./movie-details-page_style.module.scss";

const MovieDetailsPage = ({
  setPage,
  movieDetailsPageMockData,
  moviesMockData,
}) => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.movieBannerInfoContainer}>
        {movieDetailsPageMockData.map((movie) => {
          return (
            <MovieInfo
              image={movie.movieImage}
              estimation={movie.estimation}
              title={movie.movieTitle}
              description={movie.description}
              releaseDate={movie.releaseDate}
              revenue={movie.revenue}
              duration={movie.duration}
              key={movie.movieTitle}
            />
          );
        })}
      </div>
      <div className={styles.actorImagesGroup}>
        <h2 className={styles.heading}>Top Billed Cast</h2>
        <div className={styles.cardContainer}>
          {movieDetailsPageMockData[0].actors.map((actor) => {
            return (
              <ActorCard
                setPage={setPage}
                photo={actor.photo}
                name={actor.name}
                role={actor.role}
                key={actor.name}
              />
            );
          })}
        </div>
        <h2 className={styles.imagesHeading}>Images</h2>
        <div className={styles.images}>
          {movieDetailsPageMockData[0].images.map((image) => {
            return <ImageCard image={image.image} key={image.name} />;
          })}
        </div>
      </div>
      <h2 className={styles.recommendationsHeader}>Recommendations</h2>
      <div className={styles.recommendations}>
        {moviesMockData.map((movie) => {
          return (
            <MovieCard
              movieTitle={movie.title}
              movieImage={movie.movieImage}
              estimation={movie.estimation}
              genre={movie.genre}
              setPage={setPage}
              key={movie.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieDetailsPage;
