import styles from "./actor-photo-style.module.scss";

const ActorPhoto = ({ actorPhoto, actorPhotoCard = false }) => {
  if (actorPhotoCard && actorPhoto !== undefined) {
    return (
      <>
        {actorPhoto.map((photo) => {
          return (
            <img
              className={styles.actorPhotoTab}
              src={photo.photo ? photo.photo : "./actor-picture-mock.jpg"}
              alt="actor"
              key={photo.photo}
            />
          );
        })}
      </>
    );
  } else {
    return (
      <img
        className={styles.banner}
        src={actorPhoto ? actorPhoto : "movie-picture-mock.jpg"}
        alt="actor"
      />
    );
  }
};

export default ActorPhoto;
