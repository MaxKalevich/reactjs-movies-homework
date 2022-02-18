import { PaginationSideEffect } from "./paginationSideEffect";

import styles from "./pagination-style.module.scss";

const Pagination = ({ pages, currentPage }) => {
  const { dispatch, funcSetCurrentPage } = PaginationSideEffect();

  return (
    <div className={styles.pages}>
      {pages.map((page, index) => (
        <span
          className={currentPage === page ? styles.currentPage : styles.page}
          key={index}
          onClick={() => dispatch(funcSetCurrentPage(page))}
        >
          {page}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
