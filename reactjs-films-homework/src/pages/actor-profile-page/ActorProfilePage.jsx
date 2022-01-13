import ActorPhoto from "../../components/actor-photo/ActorPhoto";
import ActorInfo from "../../components/actor-info/ActorInfo";
import MovieCard from "../../components/movie-card/MovieCard";

import "./actor-profile-page_style.scss";

const ActorProfilePage = () => {
  return (
    <div className="actor-profile">
      <div className="actor-details-group">
        <ActorPhoto actorPhoto="" />
        <ActorInfo
          birthday="20.05.1994"
          biography="Отвязный и вместе с тем душевный кинокомикс Джеймса Ганна
        теперь в подпискезный и вместе с тем душевный кинокомикс Джеймса Ганзный
        и вместе с тем душевный кинокомикс Джеймса Га и вместе с тем душевный кинокомикс Джеймса Ганзный
        и вместе с тем душевный кинокомикс Джеймса Ганзный и вместе с тем
        душевный кинокомикс Джеймса Ганзный и вместе с нзный и вместе с тем
        душевный кинокомикс Джеймса Ганзный и вместе с тем душевный кинокомикс
        Джеймса Ган."
          actorName="Johny Depp"
          placeOfBirth="New York USA"
          revenue="Revenue: $10000000000"
          duration="Duration: 2:12"
        />
      </div>
      <div className="actor-profile__known-by">
        <h2 className="heading-known-by">Known By</h2>
        <div className="actor-profile__known-by-container">
          <MovieCard estimation="2.4" genre="Horror" movieTitle="Transporter" />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  );
};

export default ActorProfilePage;
