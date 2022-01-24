import { render, screen } from "@testing-library/react";
import ActorCard from "../ActorCard";

describe("Checking ActorCard component", () => {
  it("contains alt actor and have class", () => {
    render(<ActorCard />);
    expect(screen.getByAltText(/actor/i)).toHaveClass("actorTab");
  });
});
