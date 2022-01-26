import styles from "./switch-panel-style.module.scss";

const SwitchPanel = () => {
  return (
    <div className={styles.switchWrapper}>
      <ul className={styles.itemList}>
        <li>Popular</li>
        <li>Top Rated</li>
        <li>Upcoming</li>
      </ul>
    </div>
  );
};

export default SwitchPanel;
