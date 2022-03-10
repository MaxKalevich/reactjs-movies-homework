import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../store/reducers/mainPageSlice";

export function PaginationSideEffect() {
  const dispatch = useDispatch();
  const funcSetCurrentPage = setCurrentPage;
  const { pageFromUrl } = useSelector((state) => state.mainPageSlice);
  const { currentPage, totalPagesNumber } = useSelector(
    (state) => state.mainPageSlice
  );

  return {
    dispatch,
    funcSetCurrentPage,
    currentPage,
    totalPagesNumber,
    pageFromUrl,
  };
}
