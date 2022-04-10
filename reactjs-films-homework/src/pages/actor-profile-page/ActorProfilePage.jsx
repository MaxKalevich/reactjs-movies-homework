import ActorInfo from "../../components/actor-info/ActorInfo";
import MovieCard from "../../components/movie-card/MovieCard";
import DownloadSpinner from "../../components/download-spinner/DownloadSpinner";

import { ActorProfilePageSideEffects } from "./actorProfilePageSideEffects";

import { Link } from "react-router-dom";

import styles from "./actor-profile-page_style.module.scss";

const ActorProfilePage = () => {
  const { actorData, knownBy, actorImages, status, language } =
    ActorProfilePageSideEffects();
  if (status === "loading") return <DownloadSpinner />;

  return (
    <div className={styles.contentContainer}>
      <div className={styles.detailsGroup}>
        {actorData !== undefined &&
          actorData.map((actor) => {
            return (
              <ActorInfo
                photo={actor.profile_path}
                name={actor.name}
                birthday={actor.birthday}
                placeOfBirthday={actor.place_of_birth}
                biography={actor.biography}
                photos={actor.photo}
                key={actor.id}
                actorImages={actorImages}
              />
            );
          })}
      </div>
      <div className={styles.knownBy}>
        <h2 className={styles.heading}>Known By</h2>
        <div className={styles.knownByContainer}>
          {knownBy !== undefined &&
            knownBy.map((movie) => {
              return (
                <Link
                  className={styles.link}
                  to={`/movieDetails/${movie.id}?name=${movie.title}&lang=${language}`}
                  key={movie.id}
                >
                  <MovieCard
                    movieTitle={movie.title}
                    movieImage={movie.poster_path}
                    estimation={movie.vote_average}
                    genre={movie.genre}
                    key={movie.id}
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ActorProfilePage;
