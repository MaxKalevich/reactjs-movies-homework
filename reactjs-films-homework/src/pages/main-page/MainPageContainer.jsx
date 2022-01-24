import React from "react";
import MainPage from "./MainPage";

const MainPageContainer = ({ setPage }) => {
  const mainPageMockData = [
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
    {
      title: "Lemony Snicket: 33 misfortunes",
      estimation: "9.3",
      genre: "Adventure genre",
      movieImage: "33.jpg",
    },
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

  return <MainPage mainPageMockData={mainPageMockData} setPage={setPage} />;
};

export default MainPageContainer;
