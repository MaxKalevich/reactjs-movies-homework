import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchActorData,
  fetchActorImages,
  fetchKnownBy,
} from "../../store/asyncThunks/actorPage/asyncThunkActorPage";
import { useParams } from "react-router";

export function ActorProfilePageSideEffects() {
  const dispatch = useDispatch();

  const { currentActorId, movieId } = useSelector(
    (state) => state.movieDetailsPageSlice
  );

  const actorIdFromUrl = useParams().actorId;

  const { language } = useSelector((state) => state.mainPageSlice);

  const { actorData, knownBy, actorImages, status, actorName } = useSelector(
    (state) => state.actorPageSlice
  );

  useEffect(() => {
    dispatch(fetchActorData({ language, actorIdFromUrl }));
    dispatch(fetchKnownBy({ language, actorIdFromUrl }));
    dispatch(fetchActorImages({ language, actorIdFromUrl }));
  }, [language, actorName, dispatch, actorIdFromUrl]);

  return {
    actorData,
    knownBy,
    actorImages,
    currentActorId,
    movieId,
    status,
    language,
  };
}
