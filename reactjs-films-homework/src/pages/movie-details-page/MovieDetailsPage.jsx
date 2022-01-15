import ActorCard from "../../components/actor-card/ActorCard";
import ImageCard from "../../components/image-card/ImageCard";
import MovieCard from "../../components/movie-card/MovieCard";
import MovieBanner from "../../components/movie-banner/MovieBanner";
import MovieInfo from "../../components/movie-info/MovieInfo";

import "./movie-details-page_style.scss";

const MovieDetailsPage = ({ setPage }) => {
  return (
    <div className="movie-details-page__content-container">
      <div className="movie-banner-info-container">
        <MovieBanner estimation="4.2" />
        <MovieInfo
          description="Отвязный и вместе с тем душевный кинокомикс Джеймса Ганна
        теперь в подпискезный и вместе с тем душевный кинокомикс Джеймса Ганзный
        и вместе с тем душевный кинокомикс Джеймса Ганзный и вместе с тем
        душевный кинокомикс Джеймса Ганзный и вместе с тем душевный кинокомикс
        Джеймса Ган."
          movieTitle="Spider Man"
          releaseDate="10.10.2022"
          revenue="$10000000000"
          duration="2:12"
        />
      </div>
      <div className="actor-images-group">
        <h2 className="actor-top-cast-header">Top Billed Cast</h2>
        <div className="actor-card-container">
          <ActorCard setPage={setPage} />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
        </div>
        <h2 className="movie-details-image-header">Images</h2>
        <div className="images">
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </div>
      </div>
      <h2 className="recommendations-header">Recommendations</h2>
      <div className="recommendations">
        <MovieCard estimation="2.4" genre="Horror" movieTitle="Transporter" />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
