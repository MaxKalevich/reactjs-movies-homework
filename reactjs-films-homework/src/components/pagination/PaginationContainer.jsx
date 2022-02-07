import Pagination from "./Pagination";
import { useSelector } from "react-redux";
import { createPages } from "./createPages";

const PaginationContainer = () => {
  const { currentPage, totalPagesNumber } = useSelector(
    (state) => state.mainPageSlice
  );
  const pages = [];
  createPages(pages, totalPagesNumber, currentPage);
  return <Pagination pages={pages} currentPage={currentPage} />;
};

export default PaginationContainer;
