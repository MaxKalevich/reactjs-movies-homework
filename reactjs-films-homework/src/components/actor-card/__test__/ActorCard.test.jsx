import { render, screen } from "@testing-library/react";
import ActorCard from "../ActorCard";
import { store } from "../../../store/store";
import { Provider } from "react-redux";

describe("Checking ActorCard component", () => {
  it("contains alt actor and have class", () => {
    const actors = [];
    render(
      <Provider store={store}>
        <ActorCard actors={actors} />
      </Provider>
    );
    expect(screen.getByAltText(/actor/i)).toHaveClass("actorTab");
  });
});
