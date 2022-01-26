import ActorInfo from "../../components/actor-info/ActorInfo";
import MovieCard from "../../components/movie-card/MovieCard";

import styles from "./actor-profile-page_style.module.scss";

const ActorProfilePage = ({
  actorProfilePageMockData,
  setPage,
  actorProfilePageMainActorMockData,
}) => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.detailsGroup}>
        {actorProfilePageMainActorMockData.map((actor) => {
          return (
            <ActorInfo
              photo={actor.photo}
              name={actor.name}
              birthday={actor.birthday}
              placeOfBirthday={actor.placeOfBirth}
              biography={actor.biography}
              photos={actor.photos}
              key={actor.name}
            />
          );
        })}
      </div>
      <div className={styles.knownBy}>
        <h2 className={styles.heading}>Known By</h2>
        <div className={styles.knownByContainer}>
          {actorProfilePageMockData.map((movie) => {
            return (
              <MovieCard
                movieTitle={movie.title}
                movieImage={movie.movieImage}
                estimation={movie.estimation}
                genre={movie.genre}
                key={movie.title}
                setPage={setPage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActorProfilePage;
