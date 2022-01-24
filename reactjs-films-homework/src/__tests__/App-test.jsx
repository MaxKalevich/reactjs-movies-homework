import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Checking App component", () => {
  it("renders App component", () => {
    render(<App />);
    // screen.debug();
  });
  it("snapshot App component", () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  });
});
