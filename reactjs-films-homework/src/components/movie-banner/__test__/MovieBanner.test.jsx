import { render, screen, fireEvent } from "@testing-library/react";
import MovieBanner from "../MovieBanner";

describe("Checking MovieBanner component", () => {
  it("contains alt attribute", () => {
    render(<MovieBanner />);
    expect(screen.getByAltText("movie-banner")).toBeInTheDocument();
  });
  it("contains estimation text", () => {
    render(<MovieBanner estimation={"FakeData"} />);
    expect(screen.getByAltText("movie-banner")).toBeInTheDocument();
    expect(screen.getByText("FakeData")).toBeInTheDocument();
  });
  it("contains image", () => {
    render(<MovieBanner image={"ActorPhoto"} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByAltText("movie-banner")).toHaveClass("movieImage");
  });
});
