import { render } from "@testing-library/react";
import SwitchPanel from "../SwitchPanel";
import { store } from "../../../store/store";
import { Provider } from "react-redux";

describe("Checking LanguageButton component", () => {
  it("Contains displayText in LanguageButton component", () => {
    const categories = [];
    const { asFragment } = render(
      <Provider store={store}>
        <SwitchPanel categories={categories} />
      </Provider>
    );
    expect(asFragment(<SwitchPanel />)).toMatchSnapshot();
  });
});
