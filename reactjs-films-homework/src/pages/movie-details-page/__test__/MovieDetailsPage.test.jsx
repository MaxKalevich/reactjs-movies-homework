import { render, screen } from "@testing-library/react";
import MovieDetailsPage from "../MovieDetailsPage";

describe("Checking MovieDetailsPage component", () => {
  it("Contains text 'Top Billed Cast'", () => {
    const movieDetailsPageMockData = [
      {
        actors: [
          {
            name: "name",
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
    const moviesMockData = [];
    render(
      <MovieDetailsPage
        movieDetailsPageMockData={movieDetailsPageMockData}
        moviesMockData={moviesMockData}
      />
    );
    const linkElement = screen.getByText(/Top Billed Cast/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("Contains text 'Images'", () => {
    const movieDetailsPageMockData = [
      {
        actors: [
          {
            name: "name",
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
    const moviesMockData = [];
    render(
      <MovieDetailsPage
        movieDetailsPageMockData={movieDetailsPageMockData}
        moviesMockData={moviesMockData}
      />
    );
    const linkElement = screen.getByText(/Images/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("Contains text 'Recommendations'", () => {
    const movieDetailsPageMockData = [
      {
        actors: [
          {
            name: "name",
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
    const moviesMockData = [];
    render(
      <MovieDetailsPage
        movieDetailsPageMockData={movieDetailsPageMockData}
        moviesMockData={moviesMockData}
      />
    );
    const linkElement = screen.getByText(/Recommendations/i);
    expect(linkElement).toBeInTheDocument();
  });
});
