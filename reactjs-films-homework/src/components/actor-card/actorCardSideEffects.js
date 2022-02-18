import { useDispatch } from "react-redux";
import { setPage } from "../../store/reducers/appSlice";
import { setActorId } from "../../store/reducers/movieDetailsPageSlice";

export function ActorCardSideEffects() {
  const dispatch = useDispatch();
  const funcSetPage = setPage;
  const funcSetActorId = setActorId;
  return { dispatch, funcSetPage, funcSetActorId };
}
