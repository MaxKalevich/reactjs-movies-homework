import { render, screen } from "@testing-library/react";
import ActorProfilePage from "../ActorProfilePage";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

describe("Checking ActorProfilePage component", () => {
  it("render ActorProfilePage component", async () => {
    const actorProfilePageMockData = [];
    const actorProfilePageMainActorMockData = [];
    render(
      <Provider store={store}>
        <ActorProfilePage
          actorProfilePageMockData={actorProfilePageMockData}
          actorProfilePageMainActorMockData={actorProfilePageMainActorMockData}
        />
      </Provider>
    );
    const linkElement = await screen.findByText(/Known By/i);
    expect(linkElement).toBeInTheDocument();
    const mainPageMockData = [];
    const { asFragment } = render(
      <Provider store={store}>
        <ActorProfilePage mainPageMockData={mainPageMockData} />
      </Provider>
    );
    expect(asFragment(<ActorProfilePage />)).toMatchSnapshot();
  });
});
