import { LanguageButtonSideEffect } from "./languageButtonSideEffect";

import styles from "./language-btn-style.module.scss";

const LanguageButton = ({ language }) => {
  const { dispatch, funcSetLanguage } = LanguageButtonSideEffect();

  return (
    <select
      defaultValue={language}
      className={styles.langBtn}
      size="1"
      id="select-language"
      onChange={(e) => dispatch(funcSetLanguage(e.target.value))}
    >
      <option value="en">En</option>
      <option value="ru">Ru</option>
      <option value="de">De</option>
    </select>
  );
};

export default LanguageButton;
