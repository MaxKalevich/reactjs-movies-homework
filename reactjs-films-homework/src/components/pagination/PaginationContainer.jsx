import Pagination from "./Pagination";
import { createPages } from "./createPages";
import { PaginationSideEffect } from "./paginationSideEffect";

const PaginationContainer = () => {
  const { totalPagesNumber, pageFromUrl } = PaginationSideEffect();
  const pages = [];

  createPages(pages, totalPagesNumber, pageFromUrl);

  return <Pagination pages={pages} currentPage={pageFromUrl} />;
};

export default PaginationContainer;
