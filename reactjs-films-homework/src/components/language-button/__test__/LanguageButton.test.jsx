import { render, screen } from "@testing-library/react";
import LanguageButton from "../LanguageButton";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

describe("Checking LanguageButton component", () => {
  it("contains text", () => {
    render(
      <Provider store={store}>
        <LanguageButton />
      </Provider>
    );
    expect(screen.getByText(/En/i));
    expect(screen.getByText(/Ru/i));
  });
});
