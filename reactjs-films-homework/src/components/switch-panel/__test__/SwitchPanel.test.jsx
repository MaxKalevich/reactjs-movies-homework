import { render, screen } from "@testing-library/react";
import SwitchPanel from "../SwitchPanel";

describe("Checking LanguageButton component", () => {
  it("Contains displayText in LanguageButton component", () => {
    const { asFragment } = render(<SwitchPanel />);
    expect(asFragment(<SwitchPanel />)).toMatchSnapshot();
  });
});
