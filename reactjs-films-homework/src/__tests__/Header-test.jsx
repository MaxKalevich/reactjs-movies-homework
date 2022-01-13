import { render, screen } from "@testing-library/react";
import Header from "../components/header/Header";

// test("renders learn react link", () => {
//   render(<MainPage />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("Checking Header component", () => {
  it("Contains 'Title' in the header", () => {
    render(<Header />);
    const linkElement = screen.getByText(/Title/i);
    expect(linkElement).toBeInTheDocument();
  });
});
