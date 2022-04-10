import { render } from "@testing-library/react";
import MainPageContainer from "../MainPage";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

describe("Checking MainPageContainer component", () => {
  it("Snapshot", () => {
    const mainPageMockData = [];
    const { asFragment } = render(
      <Provider store={store}>
        <MainPageContainer mainPageMockData={mainPageMockData} />
      </Provider>
    );
    expect(asFragment(<MainPageContainer />)).toMatchSnapshot();
  });
});
