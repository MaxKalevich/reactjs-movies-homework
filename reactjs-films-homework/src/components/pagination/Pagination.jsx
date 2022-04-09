import { PaginationSideEffect } from "./paginationSideEffect";

import styles from "./pagination-style.module.scss";
import { useEffect } from "react";
import {
  setCurrentPage,
  setPageFromUrl,
} from "../../store/reducers/mainPageSlice";

const Pagination = ({ pages, currentPage, pageFromUrl }) => {
  const { dispatch, funcSetCurrentPage } = PaginationSideEffect();

  return (
    <div className={styles.pages}>
      {pages.map((page, index) => (
        <span
          className={pageFromUrl === page ? styles.currentPage : styles.page}
          key={index}
          onClick={() => {
            dispatch(funcSetCurrentPage(page));
            //  dispatch(setPageFromUrl(page));
          }}
        >
          {page}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
