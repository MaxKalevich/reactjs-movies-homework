import { render, screen } from "@testing-library/react";
import MovieDetailsPage from "../MovieDetailsPage";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

describe("Checking MovieDetailsPage component", () => {
  it("Contains text 'Top Billed Cast'", async () => {
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
        ],
      },
    ];
    const moviesMockData = [];
    render(
      <Provider store={store}>
        <MovieDetailsPage
          movieDetailsPageMockData={movieDetailsPageMockData}
          moviesMockData={moviesMockData}
        />
      </Provider>
    );
    const linkElement = screen.findByText(/Top Billed Cast/i);
    expect(await linkElement).toBeInTheDocument();
  });
  it("Contains text 'Images'", async () => {
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
        ],
      },
    ];
    const moviesMockData = [];
    render(
      <Provider store={store}>
        <MovieDetailsPage
          movieDetailsPageMockData={movieDetailsPageMockData}
          moviesMockData={moviesMockData}
        />
      </Provider>
    );
    const linkElement = screen.findByText(/Images/i);
    expect(await linkElement).toBeInTheDocument();
  });
  it("Contains text 'Recommendations'", async () => {
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
        ],
      },
    ];
    const moviesMockData = [];
    render(
      <Provider store={store}>
        <MovieDetailsPage
          movieDetailsPageMockData={movieDetailsPageMockData}
          moviesMockData={moviesMockData}
        />
      </Provider>
    );
    const linkElement = screen.findByText(/Recommendations/i);
    expect(await linkElement).toBeInTheDocument();
  });
});
