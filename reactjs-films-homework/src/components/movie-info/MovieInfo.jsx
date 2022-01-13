import "./movie-info-style.scss";

const MovieInfo = ({
  movieTitle,
  description,
  releaseDate,
  revenue,
  duration,
}) => {
  return (
    <div className="movie-info__movie-information">
      <h1 className="movie-info__movie-title">{movieTitle}</h1>
      <h3>Description</h3>
      <p className="movie-info__movie-description">{description}</p>
      <h3>Release Date</h3>
      <p className="movie-info__release-date">{releaseDate}</p>
      <h3>Revenue</h3>
      <p className="movie-info__release-revenue">{revenue}</p>
      <h3>Duration</h3>
      <p className="movie-info__release-duration">{duration}</p>
    </div>
  );
};

export default MovieInfo;
