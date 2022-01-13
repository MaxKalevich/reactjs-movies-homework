import "./actor-card-style.scss";

const ActorCard = ({ actorName, actorRole, actorPhoto }) => {
  return (
    <div className="actor-card">
      <img className="actor-tab" src="./actor-picture-mock.jpg" alt="actor" />
      <div className="actor-inf">
        <h2 className="actor-name">Daniel Radcliff</h2>
        <p className="actor-role">Main person</p>
      </div>
    </div>
  );
};

export default ActorCard;
