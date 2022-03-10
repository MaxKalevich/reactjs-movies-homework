import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchActorData,
  fetchActorImages,
  fetchKnownBy,
} from "../../store/asyncThunks/actorPage/asyncThunkActorPage";
import { useLocation, useNavigate, useParams } from "react-router";
import queryString from "querystring";
import { setLanguageFromUrl } from "../../store/reducers/actorPageSlice";

export function ActorProfilePageSideEffects() {
  const dispatch = useDispatch();
  const location = useNavigate();
  const history = useLocation();

  const parsed = queryString.parse(history.search.substr(1));

  const languageFromUrl = parsed.lang;

  const { currentActorId, movieId } = useSelector(
    (state) => state.movieDetailsPageSlice
  );

  const actorIdFromUrl = useParams().actorId;

  const { language } = useSelector((state) => state.mainPageSlice);

  const { actorData, knownBy, actorImages, status, actorName } = useSelector(
    (state) => state.actorPageSlice
  );

  useEffect(() => {
    dispatch(setLanguageFromUrl(languageFromUrl));

    let actualLanguage = language;

    if (parsed.lang) actualLanguage = parsed.lang;

    dispatch(fetchActorData({ actualLanguage, actorIdFromUrl }));
    dispatch(fetchKnownBy({ actualLanguage, actorIdFromUrl }));
    dispatch(fetchActorImages({ actualLanguage, actorIdFromUrl }));
  }, [
    dispatch,
    history.search,
    languageFromUrl,
    language,
    parsed.filter,
    parsed.lang,
    parsed.page,
    actorIdFromUrl,
    parsed.name,
  ]);

  useEffect(() => {
    location(`?lang=${language}&name=${actorName}`);
  }, [language, location, actorName]);

  return {
    actorData,
    knownBy,
    actorImages,
    currentActorId,
    movieId,
    status,
  };
}
