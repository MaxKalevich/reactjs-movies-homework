import styles from "./pagination-style.module.scss";

const Pagination = ({ pages, currentPage, perPage, totalCount }) => {
  // const setPage = () => alert("set page");
  const pageCount = Math.ceil(totalCount / perPage);
  return (
    <div className={styles.pages}>
      {pages.map((page, index) => (
        <span
          className={currentPage === page ? styles.currentPage : styles.page}
          key={index}
          // onClick={() => setPage(page)}
        >
          {page}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
