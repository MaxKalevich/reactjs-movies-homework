import { useState } from "react";

import styles from "./language-btn-style.module.scss";

const LanguageButton = () => {
  const [lang, setLang] = useState("en");
  return (
    <select
      defaultValue={lang}
      className={styles.langBtn}
      size="1"
      id="select-language"
    >
      <option value="en" onChange={() => setLang("en")}>
        En
      </option>
      <option value="ru" onChange={() => setLang("ru")}>
        Ru
      </option>
    </select>
  );
};

export default LanguageButton;
