import ActorCard from "../../components/actor-card/ActorCard";
import ImageCard from "../../components/image-card/ImageCard";
import MovieCard from "../../components/movie-card/MovieCard";
import MovieInfo from "../../components/movie-info/MovieInfo";

import { MovieDetailsPageSideEffects } from "./movieDetailsPageSideEffects";

import styles from "./movie-details-page_style.module.scss";

const MovieDetailsPage = () => {
  const { movieData, images, recommendationsMovie, movieCast } =
    MovieDetailsPageSideEffects();

  return (
    <div className={styles.contentContainer}>
      {movieData !== undefined &&
        movieData.map((movie) => {
          return (
            <div
              style={{
                display: "flex",
                background: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5) ), url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                padding: "15px 45px",
                color: "white",
                borderRadius: "0 0 10px 10px",
              }}
            >
              <MovieInfo
                image={movie.poster_path}
                estimation={movie.vote_average}
                title={movie.title}
                description={movie.overview}
                releaseDate={movie.release_date}
                revenue={movie.revenue}
                website={movie.homepage}
                key={movie.id}
              />
            </div>
          );
        })}

      <div className={styles.actorImagesGroup}>
        <h2 className={styles.heading}>Top Billed Cast</h2>
        <div className={styles.cardContainer}>
          {movieCast !== undefined &&
            movieCast.map((actor) => {
              return (
                <ActorCard
                  photo={actor.profile_path}
                  name={actor.name}
                  role={actor.character}
                  key={actor.credit_id}
                  id={actor.id}
                />
              );
            })}
        </div>
        <h2 className={styles.imagesHeading}>Images</h2>
        <div className={styles.images}>
          {images !== undefined &&
            images.map((image) => {
              return <ImageCard image={image.file_path} key={image.name} />;
            })}
        </div>
      </div>
      <h2 className={styles.recommendationsHeader}>Recommendations</h2>
      <div className={styles.recommendations}>
        {recommendationsMovie !== undefined &&
          recommendationsMovie.map((movie) => {
            return (
              <MovieCard
                movieTitle={movie.title}
                movieImage={movie.poster_path}
                estimation={movie.vote_average}
                genre={movie.release_date}
                key={movie.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default MovieDetailsPage;
