import Pagination from "./Pagination";
import { createPages } from "./createPages";
import { PaginationSideEffect } from "./paginationSideEffect";

const PaginationContainer = () => {
  const { totalPagesNumber, currentPage } = PaginationSideEffect();
  const pages = [];
  createPages(pages, totalPagesNumber, currentPage);
  return <Pagination pages={pages} currentPage={currentPage} />;
};

export default PaginationContainer;
