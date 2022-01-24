import styles from "./image-card-style.module.scss";

const ImageCard = ({ images }) => {
  return (
    <>
      {images.map((image) => {
        return (
          <div className={styles.imageContainer} key={image.name}>
            <img
              className={styles.imageBanner}
              src={image.image ? image.image : "movie_image-picture-mock.jpg"}
              alt="photo from the shooting"
            />
          </div>
        );
      })}
    </>
  );
};

export default ImageCard;
