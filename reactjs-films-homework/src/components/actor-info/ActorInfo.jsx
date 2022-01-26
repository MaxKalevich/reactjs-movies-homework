import ActorPhoto from "../actor-photo/ActorPhoto";

import styles from "./actor-info-style.module.scss";

const ActorInfo = ({
  name,
  photo,
  birthday,
  placeOfBirthday,
  photos,
  biography,
}) => {
  return (
    <>
      <ActorPhoto actorPhoto={photo} />
      <div className={styles.contentContainer}>
        <h2 className={styles.name}>{name}</h2>
        <p>
          <span className={styles.birthday}>Birthday</span> {birthday}
        </p>
        <p className={styles.birthdayPlace}>
          <span className={styles.placeOfBirth}>Place Of Birth</span>
          {placeOfBirthday}
        </p>
        <p className={styles.biography}>
          <span className={styles.biographyHeader}>Biography</span>
          {biography}
        </p>
        <div>
          <h2 className={styles.headerPhotos}>Photos</h2>
          <div className={styles.photosContainer}>
            <ActorPhoto actorPhotoCard={true} actorPhoto={photos} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ActorInfo;
