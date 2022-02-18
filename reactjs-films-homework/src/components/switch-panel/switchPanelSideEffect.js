import { useDispatch, useSelector } from "react-redux";
import {
  setApiCategory,
  setCategory,
} from "../../store/reducers/mainPageSlice";

export function SwitchPanelSideEffect() {
  const dispatch = useDispatch();
  const funcSetApiCategory = setApiCategory;
  const funcSetCategory = setCategory;
  const { category, categories } = useSelector((state) => state.mainPageSlice);
  return {
    dispatch,
    funcSetApiCategory,
    funcSetCategory,
    category,
    categories,
  };
}
