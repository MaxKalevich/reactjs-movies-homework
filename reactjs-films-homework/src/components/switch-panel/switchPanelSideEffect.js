import { useDispatch, useSelector } from "react-redux";
import {
  setApiCategory,
  setCategory,
} from "../../store/reducers/mainPageSlice";

export function SwitchPanelSideEffect() {
  const dispatch = useDispatch();
  const funcSetApiCategory = setApiCategory;
  const funcSetCategory = setCategory;
  const { categoryFromUrl, api_category } = useSelector(
    (state) => state.mainPageSlice
  );
  const { categories } = useSelector((state) => state.mainPageSlice);

  return {
    dispatch,
    funcSetApiCategory,
    funcSetCategory,
    categories,
    categoryFromUrl,
    api_category,
  };
}
