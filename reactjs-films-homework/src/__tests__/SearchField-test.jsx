import { render, screen } from "@testing-library/react";
import SearchField from "../components/search-field/SearchField";

describe("Checking SearchField component", () => {
  it("Contains placeholder in SearchField component", () => {
    render(<SearchField />);
    expect(
      screen.getByPlaceholderText("Movies, person, movie theaters")
    ).toBeInTheDocument();
  });
  it("Contains altText in SearchField component", () => {
    render(<SearchField />);
    expect(screen.getByAltText("search icon")).toBeInTheDocument();
  });
});
