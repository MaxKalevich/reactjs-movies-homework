import styles from "./actor-photo-style.module.scss";

const ActorPhoto = ({ actorPhoto, actorPhotoCard = false }) => {
  if (actorPhotoCard && actorPhoto !== undefined) {
    return actorPhoto.map((image) => {
      return (
        <img
          className={styles.actorPhotoTab}
          src={
            actorPhoto
              ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${image.file_path}`
              : "./actor-picture-mock.jpg"
          }
          alt="actor"
          key={image.file_path}
        />
      );
    });
  } else {
    return (
      <img
        className={styles.banner}
        src={
          actorPhoto
            ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${actorPhoto}`
            : "movie-picture-mock.jpg"
        }
        alt="actor"
      />
    );
  }
};

export default ActorPhoto;
