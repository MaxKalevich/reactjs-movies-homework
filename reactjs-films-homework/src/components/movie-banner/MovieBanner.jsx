import "./movie-banner-style.scss";

const MovieBanner = ({ estimation, image }) => {
  return (
    <div className="movie-banner">
      <span className="estimation-movie-banner">{estimation}</span>
      <img
        className="movie-banner__movie-img"
        src={image ? image : "movie-picture-mock.jpg"}
        alt="movie-banner"
      />
    </div>
  );
};

export default MovieBanner;
