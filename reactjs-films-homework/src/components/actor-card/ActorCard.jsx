import { ActorCardSideEffects } from "./actorCardSideEffects";

import styles from "./actor-card-style.module.scss";

const ActorCard = ({ name, photo, role, id }) => {
  const { dispatch, funcSetPage, funcSetActorId } = ActorCardSideEffects();
  return (
    <div
      className={styles.container}
      onClick={() => {
        dispatch(funcSetPage("actorDetails"));
        dispatch(funcSetActorId(id));
      }}
    >
      <img
        className={styles.actorTab}
        src={
          photo
            ? `https://www.themoviedb.org/t/p/w138_and_h175_face${photo}`
            : "./actor-picture-mock.jpg"
        }
        alt="actor"
      />
      <div className={styles.actorInfo}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.role}>{role}</p>
      </div>
    </div>
  );
};

export default ActorCard;
