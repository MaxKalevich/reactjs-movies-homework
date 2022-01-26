import MovieCard from "../../components/movie-card/MovieCard";
import SwitchPanel from "../../components/switch-panel/SwitchPanel";

import styles from "./main-page_style.module.scss";
import PaginationContainer from "../../components/pagination/PaginationContainer";

const MainPage = ({ setPage, mainPageMockData }) => {
  return (
    <section className={styles.mainPage}>
      <SwitchPanel />
      <main className={styles.cardContainer}>
        {mainPageMockData.map((movie) => {
          return (
            <MovieCard
              movieTitle={movie.title}
              movieImage={movie.movieImage}
              estimation={movie.estimation}
              genre={movie.genre}
              setPage={setPage}
              key={movie.title}
            />
          );
        })}
      </main>
      <PaginationContainer />
    </section>
  );
};

export default MainPage;
