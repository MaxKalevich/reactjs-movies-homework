import styles from "./actor-card-style.module.scss";

const ActorCard = ({ name, photo, role, setPage }) => {
  return (
    <div className={styles.container} onClick={() => setPage("actorDetails")}>
      <img
        className={styles.actorTab}
        src={photo ? photo : "./actor-picture-mock.jpg"}
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
