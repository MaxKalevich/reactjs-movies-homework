import { useDispatch } from "react-redux";
import { setPage } from "../../store/reducers/appSlice";
import { setActorId } from "../../store/reducers/movieDetailsPageSlice";
import { setActorName } from "../../store/reducers/actorPageSlice";

export function ActorCardSideEffects() {
  const dispatch = useDispatch();
  const funcSetPage = setPage;
  const funcSetActorId = setActorId;
  const funcSetActorName = setActorName;
  return { dispatch, funcSetPage, funcSetActorId, funcSetActorName };
}
