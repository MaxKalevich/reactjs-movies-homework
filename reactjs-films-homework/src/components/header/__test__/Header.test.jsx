import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

describe("Checking Header component", () => {
  it("Contains 'Title' in the header", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const linkElement = screen.getByText(/Movie Searcher/i);
    expect(linkElement).toBeInTheDocument();
  });
});
