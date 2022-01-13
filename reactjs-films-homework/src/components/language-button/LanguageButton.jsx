import { useState } from "react";

import "./language-btn-style.scss";

const LanguageButton = () => {
  const [lang, setLang] = useState("en");
  return (
    <select
      defaultValue={lang}
      className="lang-btn"
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
