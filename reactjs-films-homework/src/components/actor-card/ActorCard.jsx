import styles from "./actor-card-style.module.scss";

const ActorCard = ({ actors, setPage }) => {
  return (
    <>
      {actors.map((actor) => {
        return (
          <div
            className={styles.actorCard}
            onClick={() => setPage("actorDetails")}
          >
            <img
              className={styles.actorTab}
              src={actor.photo ? actor.photo : "./actor-picture-mock.jpg"}
              alt={actor.photo ? actor.photo : "actor"}
            />
            <div className={styles.actorInfo}>
              <h2 className={styles.actorName}>{actor.name}</h2>
              <p className={styles.actorRole}>{actor.role}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ActorCard;
