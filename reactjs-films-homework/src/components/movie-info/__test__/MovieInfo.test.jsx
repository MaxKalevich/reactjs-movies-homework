import { render, screen } from "@testing-library/react";
import MovieInfo from "../MovieInfo";

describe("Checking MovieInfo component", () => {
  it("contains movieTitle text", () => {
    render(<MovieInfo movieTitle={"movieTitle"} />);
    expect(screen.getByText("movieTitle")).toBeInTheDocument();
  });
  it("contains description text", () => {
    render(<MovieInfo description={"description"} />);
    expect(screen.getByText("description")).toBeInTheDocument();
  });
  it("contains releaseDate text", () => {
    render(<MovieInfo movieTitle={"releaseDate"} />);
    expect(screen.getByText("releaseDate")).toBeInTheDocument();
  });
  it("contains revenue text", () => {
    render(<MovieInfo movieTitle={"revenue"} />);
    expect(screen.getByText("revenue")).toBeInTheDocument();
  });
  it("contains duration text", () => {
    render(<MovieInfo movieTitle={"duration"} />);
    expect(screen.getByText("duration")).toBeInTheDocument();
  });
});
