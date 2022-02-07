import styles from "./pagination-style.module.scss";
import { setCurrentPage } from "../../store/reducers/mainPageSlice";
import { useDispatch } from "react-redux";

const Pagination = ({ pages, currentPage }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.pages}>
      {pages.map((page, index) => (
        <span
          className={currentPage === page ? styles.currentPage : styles.page}
          key={index}
          onClick={() => dispatch(setCurrentPage(page))}
        >
          {page}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
