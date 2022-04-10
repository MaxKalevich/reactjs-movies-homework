import styles from "./not-found-style.module.scss";

const NotFoundComponent = ({ message }) => {
  return <h2 className={styles.text}>{message}</h2>;
};

export default NotFoundComponent;
