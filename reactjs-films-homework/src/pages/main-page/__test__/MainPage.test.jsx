import { render } from "@testing-library/react";
import MainPage from "../MainPage";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

describe("Checking MainPage component", () => {
  it("Snapshot", () => {
    const mainPageMockData = [];
    const { asFragment } = render(
      <Provider store={store}>
        <MainPage mainPageMockData={mainPageMockData} />
      </Provider>
    );
    expect(asFragment(<MainPage />)).toMatchSnapshot();
  });
});
