import React from "react";
import Pagination from "./Pagination";

const PaginationContainer = () => {
  const state = {
    currentPage: 1,
    perPage: 10,
    totalCount: 0,
  };

  const pages = [1, 2, 3, 4, 5];

  return (
    <Pagination
      pages={pages}
      currentPage={state.currentPage}
      perPage={state.perPage}
      totalCount={state.totalCount}
    />
  );
};

export default PaginationContainer;
