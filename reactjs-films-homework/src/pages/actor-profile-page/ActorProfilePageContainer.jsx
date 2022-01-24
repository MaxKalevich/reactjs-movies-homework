import ActorProfilePage from "./ActorProfilePage";

const ActorProfilePageContainer = ({ setPage }) => {
  const actorProfilePageMockData = [
    {
      title: "Home Alone 2: Lost in New York",
      estimation: "9.8",
      genre: "Family movie",
      movieImage: "HomeAlone.jpg",
    },
    {
      title: "Transporter 3",
      estimation: "9.4",
      genre: "Action movie",
      movieImage: "Transporter3.jpg",
    },
    {
      title: "Harry Potter and the philosopher's stone",
      estimation: "10",
      genre: "Mystical genre",
      movieImage: "HarryPotter.jpg",
    },
    {
      title: "Léon: The Professional",
      estimation: "9.6",
      genre: "Dramatic genre",
      movieImage: "Leon.jpg",
    },
    {
      title: "Фильм Затура (Zathura: A Space Adventure)",
      estimation: "9.1",
      genre: "Fantastic genre",
      movieImage: "Zathura.jpg",
    },
    {
      title: "Fast & Furious 5",
      estimation: "9.5",
      genre: "Racing genre",
      movieImage: "Fast.jpg",
    },
  ];

  const actorProfilePageMainActorMockData = [
    {
      name: "Joe Pesci",
      role: "as Harry",
      photo: "actors/Joe.jpg",
      birthday: "20.05.1994",
      biography:
        "Joseph Frank Pesci (/ˈpɛʃi/ PESH-ee, Italian pronunciation: [ˈpeʃʃi]; born February 9, 1943) is a retired American actor and musician. He is known for portraying tough, volatile characters in a variety of genres and for his collaborations with Robert De Niro and Martin Scorsese in the films Raging Bull (1980), Goodfellas (1990), Casino (1995), and The Irishman (2019). He also appeared in Once Upon a Time in America (1984), Moonwalker (1988), JFK (1991), A Bronx Tale (1993), and The Good Shepherd (2006). His comedy roles include such films as the first two installments in the Home Alone franchise (1990–1992), My Cousin Vinny (1992), and the Lethal Weapon franchise (1989–1998).",
      placeOfBirth: "Texas",
      photos: [
        { photo: "actors/Macaulay.jpg" },
        { photo: "actors/Joe.jpg" },
        { photo: "actors/Daniel.jpg" },
        { photo: "actors/John.jpg" },
        { photo: "actors/Roberts.jpg" },
      ],
    },
  ];

  return (
    <ActorProfilePage
      setPage={setPage}
      actorProfilePageMockData={actorProfilePageMockData}
      actorProfilePageMainActorMockData={actorProfilePageMainActorMockData}
    />
  );
};

export default ActorProfilePageContainer;
