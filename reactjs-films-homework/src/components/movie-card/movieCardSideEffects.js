import { useDispatch } from "react-redux";
import { setPage } from "../../store/reducers/appSlice";
import { setMovieId, setMovieName } from "../../store/reducers/mainPageSlice";

export function MovieCardSideEffects() {
  const dispatch = useDispatch();
  const funcSetPage = setPage;
  const funcSetPMovieId = setMovieId;
  const funcSetMovieName = setMovieName;
  return {
    dispatch,
    funcSetPage,
    funcSetPMovieId,
    funcSetMovieName,
  };
}
