import { useDispatch } from "react-redux";
import { setLanguage } from "../../store/reducers/mainPageSlice";

import styles from "./language-btn-style.module.scss";

const LanguageButton = ({ language }) => {
  const dispatch = useDispatch();

  return (
    <select
      defaultValue={language}
      className={styles.langBtn}
      size="1"
      id="select-language"
      onChange={(e) => dispatch(setLanguage(e.target.value))}
    >
      <option value="en">En</option>
      <option value="ru">Ru</option>
      <option value="de">De</option>
    </select>
  );
};

export default LanguageButton;
