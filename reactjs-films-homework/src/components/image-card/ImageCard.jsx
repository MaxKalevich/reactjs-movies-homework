import styles from "./image-card-style.module.scss";

const ImageCard = ({ image }) => {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.imageBanner}
        src={image ? image : "movie_image-picture-mock.jpg"}
        alt="from the shooting"
      />
    </div>
  );
};

export default ImageCard;
