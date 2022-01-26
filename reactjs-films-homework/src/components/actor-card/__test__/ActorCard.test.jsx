import { render, screen } from "@testing-library/react";
import ActorCard from "../ActorCard";

describe("Checking ActorCard component", () => {
  it("contains alt actor and have class", () => {
    const actors = [];
    render(<ActorCard actors={actors} />);
    expect(screen.getByAltText(/actor/i)).toHaveClass("actorTab");
  });
});
