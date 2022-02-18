import LanguageButton from "./LanguageButton";

import { LanguageButtonSideEffect } from "./languageButtonSideEffect";

const LanguageButtonContainer = () => {
  const { language } = LanguageButtonSideEffect();

  return <LanguageButton language={language} />;
};

export default LanguageButtonContainer;
