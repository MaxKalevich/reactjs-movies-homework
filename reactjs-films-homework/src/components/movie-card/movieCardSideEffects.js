import { useDispatch } from "react-redux";
import { setPage } from "../../store/reducers/appSlice";
import { setMovieId } from "../../store/reducers/mainPageSlice";

export function MovieCardSideEffects() {
  const dispatch = useDispatch();
  const funcSetPage = setPage;
  const funcSetPMovieId = setMovieId;
  return {
    dispatch,
    funcSetPage,
    funcSetPMovieId,
  };
}
