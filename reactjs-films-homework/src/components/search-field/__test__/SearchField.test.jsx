import { render, screen } from "@testing-library/react";
import SearchField from "../SearchField";
import { store } from "../../../store/store";
import { Provider } from "react-redux";

describe("Checking SearchField component", () => {
  it("Contains placeholder in SearchField component", () => {
    render(
      <Provider store={store}>
        <SearchField />
      </Provider>
    );
    expect(
      screen.getByPlaceholderText("Movies, person, movie theaters")
    ).toBeInTheDocument();
  });
  it("Contains altText in SearchField component", () => {
    render(
      <Provider store={store}>
        <SearchField />
      </Provider>
    );
    expect(screen.getByAltText("search icon")).toBeInTheDocument();
  });
  it("Contains id in SearchField component", () => {
    render(
      <Provider store={store}>
        <SearchField />
      </Provider>
    );
    expect(screen.getByDisplayValue("")).toHaveAttribute("id");
  });
});
