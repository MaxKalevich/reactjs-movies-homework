import ActorPhoto from "../actor-photo/ActorPhoto";

import styles from "./actor-info-style.module.scss";

const ActorInfo = ({ actorProfilePageMainActorMockData }) => {
  return (
    <>
      {actorProfilePageMainActorMockData.map((actor) => {
        return (
          <>
            <ActorPhoto actorPhoto={actor.photos[1].photo} />
            <div className={styles.contentContainer}>
              <h2 className={styles.actorName}>{actor.name}</h2>
              <p>
                <span className={styles.birthday}>Birthday</span>{" "}
                {actor.birthday}
              </p>
              <p className={styles.birthdayPlace}>
                <span className={styles.placeOfBirth}>Place Of Birth</span>
                {actor.placeOfBirth}
              </p>
              <p className={styles.biography}>
                <span className={styles.biographyHeader}>Biography</span>
                {actor.biography}
              </p>
              <div>
                <h2 className={styles.headerPhotos}>Photos</h2>
                <div className={styles.photosContainer}>
                  <ActorPhoto actorPhotoCard={true} actorPhoto={actor.photos} />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ActorInfo;
