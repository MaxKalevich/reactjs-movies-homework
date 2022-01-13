import ActorPhotoCard from "../actor-photo-card/ActorPhotoCard";

import "./actor-info-style.scss";

const ActorInfo = ({
  actorName,
  biography,
  birthday,
  placeOfBirth,
  revenue,
  duration,
}) => {
  return (
    <div className="actor-info-wrapper">
      <h1 className="actor-info__actor-name">{actorName}</h1>
      <p className="actor-info__birthday">
        <h3 className="header-actor-birthday">Birthday</h3> {birthday}
      </p>
      <p className="actor-info__place-of-birthday">
        <h3 className="header-actor-place">Place Of Birth</h3> {placeOfBirth}
      </p>
      <h3 className="actor-info__biography-header">Biography</h3>
      <p className="actor-info__biography">{biography}</p>
      <div className="actor-details__photos">
        <h2 className="actor-profile__header">Photos</h2>
        <div className="actor-photos-container">
          <ActorPhotoCard />
          <ActorPhotoCard />
          <ActorPhotoCard />
          <ActorPhotoCard />
          <ActorPhotoCard />
          <ActorPhotoCard />
          <ActorPhotoCard />
          <ActorPhotoCard />
          <ActorPhotoCard />
        </div>
      </div>
    </div>
  );
};

export default ActorInfo;
