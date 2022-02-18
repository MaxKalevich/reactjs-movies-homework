import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchActorData,
  fetchActorImages,
  fetchKnownBy,
} from "../../store/asyncThunks/actorPage/asyncThunkActorPage";
import { setPage } from "../../store/reducers/appSlice";

export function ActorProfilePageSideEffects() {
  const dispatch = useDispatch();
  const funcSetPage = setPage;
  const { currentActorId } = useSelector(
    (state) => state.movieDetailsPageSlice
  );

  const { language } = useSelector((state) => state.mainPageSlice);
  const { actorData, knownBy, actorImages } = useSelector(
    (state) => state.actorPageSlice
  );

  useEffect(() => {
    dispatch(fetchActorData({ language, currentActorId }));
    dispatch(fetchKnownBy({ language, currentActorId }));
    dispatch(fetchActorImages({ language, currentActorId }));
  }, [language, currentActorId, dispatch]);
  return { actorData, knownBy, actorImages, funcSetPage };
}
