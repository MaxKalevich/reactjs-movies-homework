import { render, screen, fireEvent } from "@testing-library/react";
import LanguageButton from "../LanguageButton";

describe("Checking LanguageButton component", () => {
  it("contains text", () => {
    render(<LanguageButton />);
    expect(screen.getByText(/En/i));
    expect(screen.getByText(/Ru/i));
  });
});
