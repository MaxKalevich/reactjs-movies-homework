import { setSearchData } from "../../store/reducers/mainPageSlice";
import { useDispatch, useSelector } from "react-redux";

export function SearchFieldSideEffects() {
  const dispatch = useDispatch();
  const { search, searchFromUrl } = useSelector((state) => state.mainPageSlice);
  const funcSetSearchData = setSearchData;
  return { search, funcSetSearchData, dispatch, searchFromUrl };
}
