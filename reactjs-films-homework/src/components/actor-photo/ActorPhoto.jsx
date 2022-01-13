import "./actor-photo-style.scss";

const ActorPhoto = ({ actorPhoto }) => {
  return (
    <img
      className="actor-banner"
      src={actorPhoto ? actorPhoto : "movie-picture-mock.jpg"}
      alt="actor-photo"
    />
  );
};

export default ActorPhoto;
