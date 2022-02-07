import styles from "./movie-card-style.module.scss";
import { useDispatch } from "react-redux";
import { setPage } from "../../store/reducers/appSlice";

const MovieCard = ({ movieTitle, estimation, date, movieImage }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={styles.card}
      onClick={() => dispatch(setPage("movieDetails"))}
    >
      <span className={styles.estimationMovie}>{estimation}</span>
      <img
        className={styles.movieImage}
        src={
          movieImage
            ? `https://image.tmdb.org/t/p/w220_and_h330_face${movieImage}`
            : "movie-picture-mock.jpg"
        }
        alt="movie banner"
      />
      <div className={styles.movieInfo}>
        <h2 className={styles.titleCard}>{movieTitle}</h2>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default MovieCard;
