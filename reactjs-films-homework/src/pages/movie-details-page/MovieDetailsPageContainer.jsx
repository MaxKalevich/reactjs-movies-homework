import React from "react";
import MovieDetailsPage from "./MovieDetailsPage";

const MovieDetailsPageContainer = ({ setPage }) => {
  const movieDetailsPageMockData = [
    {
      movieTitle: "Home Alone 2: Lost in New York",
      description:
        "Home Alone 2: Lost in New York is a 1992 American comedy film directed by Chris Columbus and written and produced by John Hughes. It is the sequel to Home Alone (1990), and is the second film in the Home Alone franchise." +
        " The film stars Macaulay Culkin, Joe Pesci, Daniel Stern, John Heard, Tim Curry, Brenda Fricker, and Catherine O'Hara. It follows Kevin McCallister (Culkin), as he is separated from his family on their holiday vacation, this time in New York City.",
      estimation: "9.8",
      genre: "Family movie",
      movieImage: "HomeAlone.jpg",
      releaseDate: "10.10.2022",
      revenue: "$10000000000",
      duration: "2:12",
      actors: [
        {
          name: "Macaulay Culkin",
          role: "as Kevin",
          photo: "actors/Macaulay.jpg",
        },
        {
          name: "Joe Pesci",
          role: "as Harry",
          photo: "actors/Joe.jpg",
        },
        {
          name: "Daniel Stern",
          role: "as Marv",
          photo: "actors/Daniel.jpg",
        },
        {
          name: "John Heard",
          role: "as Peter",
          photo: "actors/John.jpg",
        },
        {
          name: "Roberts Blossom",
          role: "as Marley",
          photo: "actors/Roberts.jpg",
        },
        {
          name: "Catherine O'Hara",
          role: "as Kate",
          photo: "actors/Catherine.jpg",
        },
      ],
      images: [
        {
          image: "images/1.jpg",
        },
        {
          image: "images/2.jpg",
        },
        {
          image: "images/3.jpg",
        },
        {
          image: "images/4.jpg",
        },
        {
          image: "images/5.jpg",
        },
        {
          image: "images/6.jpg",
        },
      ],
    },
  ];

  const moviesMockData = [
    {
      title: "The Blair Witch: Coursework from the Other World",
      estimation: "9.2",
      genre: "Horror genre",
      movieImage: "TheBlairWitch.jpg",
    },
    {
      title: "The Treasure of the Nation",
      estimation: "9.5",
      genre: "Adventure genre",
      movieImage: "Treasure.jpg",
    },
    {
      title: "Green Book",
      estimation: "9.4",
      genre: "Adventure genre",
      movieImage: "GreenBook.jpg",
    },
    {
      title: "Star Wars: The Rise of Skywalker",
      estimation: "9.3",
      genre: "Adventure genre",
      movieImage: "SW.jpeg",
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      estimation: "9.4",
      genre: "Adventure genre",
      movieImage: "LOTR.jpg",
    },
    {
      title: "There is no movie",
      estimation: "",
      genre: "",
      movieImage: "",
    },
  ];

  return (
    <MovieDetailsPage
      setPage={setPage}
      movieDetailsPageMockData={movieDetailsPageMockData}
      moviesMockData={moviesMockData}
    />
  );
};

export default MovieDetailsPageContainer;
