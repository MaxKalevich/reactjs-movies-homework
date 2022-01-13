import "./actor-photo-card-style.scss";

const ActorPhotoCard = ({ actorPhoto }) => {
  return (
    <img
      className="actor-photo-tab"
      src={actorPhoto ? actorPhoto : "./actor-picture-mock.jpg"}
      alt="actor"
    />
  );
};

export default ActorPhotoCard;
