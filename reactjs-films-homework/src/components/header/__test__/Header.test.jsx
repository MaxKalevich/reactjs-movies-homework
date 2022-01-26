import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Checking Header component", () => {
  it("Contains 'Title' in the header", () => {
    render(<Header />);
    const linkElement = screen.getByText(/Movie Searcher/i);
    expect(linkElement).toBeInTheDocument();
  });
});
