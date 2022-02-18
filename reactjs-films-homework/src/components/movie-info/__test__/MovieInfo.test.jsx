import { render, screen } from "@testing-library/react";
import MovieInfo from "../MovieInfo";

describe("Checking MovieInfo component", () => {
  it("contains description text", () => {
    render(<MovieInfo description={"description"} />);
    expect(screen.getByText("Description")).toBeInTheDocument();
  });
  it("contains releaseDate text", () => {
    render(<MovieInfo movieTitle={"releaseDate"} />);
    expect(screen.getByText("Release Date")).toBeInTheDocument();
  });
  it("contains revenue text", () => {
    render(<MovieInfo movieTitle={"revenue"} />);
    expect(screen.getByText("Revenue")).toBeInTheDocument();
  });
  it("contains duration text", () => {
    render(<MovieInfo movieTitle={"duration"} />);
    expect(screen.getByText("Duration")).toBeInTheDocument();
  });
});
