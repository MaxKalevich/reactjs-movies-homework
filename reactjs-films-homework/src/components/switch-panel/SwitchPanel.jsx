import { SwitchPanelSideEffect } from "./switchPanelSideEffect";

import styles from "./switch-panel-style.module.scss";

const SwitchPanel = ({ categories, categoryFromUrl, api_category }) => {
  const { dispatch, funcSetApiCategory, funcSetCategory } =
    SwitchPanelSideEffect();

  return (
    <div className={styles.switchWrapper}>
      <ul className={styles.itemList}>
        {categories.map((cat) => {
          return (
            <li
              className={
                cat.api_name === categoryFromUrl
                  ? styles.currentCategory
                  : styles.category
              }
              onClick={() => {
                dispatch(funcSetCategory(cat.name));
                dispatch(funcSetApiCategory(cat.api_name));
              }}
              key={cat.name}
            >
              {cat.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SwitchPanel;
