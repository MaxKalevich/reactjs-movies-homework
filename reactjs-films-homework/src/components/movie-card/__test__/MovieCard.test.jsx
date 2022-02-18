import { render, screen } from "@testing-library/react";
import MovieCard from "../MovieCard";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

describe("Checking MovieCard component", () => {
  render(
    <Provider store={store}>
      <MovieCard />
    </Provider>
  );
  it("contains alt attribute", () => {
    expect(screen.getByAltText("movie banner")).toBeInTheDocument();
  });
  it("contains estimation text", () => {
    render(
      <Provider store={store}>
        <MovieCard estimation={"estimation"} />{" "}
      </Provider>
    );
    expect(screen.getByText("estimation")).toBeInTheDocument();
  });
  it("contains image", () => {
    render(
      <Provider store={store}>
        <MovieCard movieImage={"movieImage"} />{" "}
      </Provider>
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByAltText("movie banner")).toHaveClass("movieImage");
  });
});
