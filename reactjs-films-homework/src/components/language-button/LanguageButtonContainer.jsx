import LanguageButton from "./LanguageButton";

import { LanguageButtonSideEffect } from "./languageButtonSideEffect";
import { useSelector } from "react-redux";

const LanguageButtonContainer = () => {
  const { language } = LanguageButtonSideEffect();
  const { categoryFromUrl } = useSelector((state) => state.mainPageSlice);
  return (
    <LanguageButton language={language} categoryFromUrl={categoryFromUrl} />
  );
};

export default LanguageButtonContainer;
