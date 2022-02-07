import LanguageButton from "./LanguageButton";

import { useSelector } from "react-redux";

const LanguageButtonContainer = () => {
  const { language } = useSelector((state) => state.mainPageSlice);

  return <LanguageButton language={language} />;
};

export default LanguageButtonContainer;
