import "./movie-card-style.scss";

const MovieCard = ({
  estimation,
  movieTitle,
  description,
  genre,
  movieImage,
}) => {
  return (
    <div className="card">
      <span className="estimation-movie">{estimation}</span>
      <img
        className="movie-image"
        src={movieImage ? movieImage : "movie-picture-mock.jpg"}
        alt=""
      />
      <div className="movie-info">
        <h2 className="movie-title-card">{movieTitle}</h2>
        <p className="movie-description-main-page">{description}</p>
        <span className="movie-genre">{genre}</span>
      </div>
    </div>
  );
};

export default MovieCard;
