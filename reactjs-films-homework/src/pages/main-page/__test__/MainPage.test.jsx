import { render } from "@testing-library/react";
import MainPage from "../MainPage";

describe("Checking MainPage component", () => {
  it("Snapshot", () => {
    const mainPageMockData = [];
    const { asFragment } = render(
      <MainPage mainPageMockData={mainPageMockData} />
    );
    expect(asFragment(<MainPage />)).toMatchSnapshot();
  });
});
