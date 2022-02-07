import styles from "./switch-panel-style.module.scss";
import { useDispatch } from "react-redux";
import {
  setApiCategory,
  setCategory,
} from "../../store/reducers/mainPageSlice";

const SwitchPanel = ({ category, categories }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.switchWrapper}>
      <ul className={styles.itemList}>
        {categories.map((cat) => {
          return (
            <li
              className={
                cat.name === category ? styles.currentCategory : styles.category
              }
              onClick={() => {
                dispatch(setCategory(cat.name));
                dispatch(setApiCategory(cat.api_name));
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
