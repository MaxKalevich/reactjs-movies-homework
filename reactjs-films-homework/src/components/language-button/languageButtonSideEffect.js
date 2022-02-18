import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../store/reducers/mainPageSlice";

export function LanguageButtonSideEffect() {
  const dispatch = useDispatch();
  const funcSetLanguage = setLanguage;
  const { language } = useSelector((state) => state.mainPageSlice);
  return {
    language,
    dispatch,
    funcSetLanguage,
  };
}
