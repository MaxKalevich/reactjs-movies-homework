import { render, screen, fireEvent } from "@testing-library/react";
import MovieCard from "../MovieCard";
import MovieBanner from "../../movie-banner/MovieBanner";

describe("Checking MovieCard component", () => {
  render(<MovieCard />);
  it("contains alt attribute", () => {
    expect(screen.getByAltText("movie banner")).toBeInTheDocument();
  });
  it("contains estimation text", () => {
    render(<MovieCard estimation={"estimation"} />);
    expect(screen.getByText("estimation")).toBeInTheDocument();
  });
  it("contains image", () => {
    render(<MovieCard movieImage={"movieImage"} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByAltText("movie banner")).toHaveClass("movieImage");
  });
});
