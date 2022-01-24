import { render, screen } from "@testing-library/react";
import ActorProfilePage from "../ActorProfilePage";

describe("Checking ActorProfilePage component", () => {
  it("render ActorProfilePage component", () => {
    const actorProfilePageMockData = [];
    const actorProfilePageMainActorMockData = [];
    render(
      <ActorProfilePage
        actorProfilePageMockData={actorProfilePageMockData}
        actorProfilePageMainActorMockData={actorProfilePageMainActorMockData}
      />
    );
    const linkElement = screen.getByText(/Known By/i);
    expect(linkElement).toBeInTheDocument();
  });
});
