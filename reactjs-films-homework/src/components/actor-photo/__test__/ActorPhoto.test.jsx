import { render, screen } from "@testing-library/react";
import ActorPhoto from "../ActorPhoto";

describe("Checking ActorPhoto component", () => {
  it("contains alt actor-photo and have class", () => {
    render(<ActorPhoto />);
    expect(screen.getByAltText(/actor/i)).toHaveClass("banner");
  });
});
