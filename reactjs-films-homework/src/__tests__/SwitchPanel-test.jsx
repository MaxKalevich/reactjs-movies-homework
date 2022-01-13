import { render, screen } from "@testing-library/react";
import LanguageButton from "../components/language-button/LanguageButton";

describe("Checking LanguageButton component", () => {
  it("Contains displayText in LanguageButton component", () => {
    render(<LanguageButton />);
    expect(screen.getByText("En")).toBeInTheDocument();
    expect(screen.getByText("Ru")).toBeInTheDocument();
  });
});
