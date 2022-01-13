import "./image-card-style.scss";

const ImageCard = ({ image }) => {
  return (
    <div className="image-container">
      <img className="image-banner" src="movie_image-picture-mock.jpg" alt="" />
    </div>
  );
};

export default ImageCard;
