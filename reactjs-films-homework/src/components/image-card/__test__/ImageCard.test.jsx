import { render, screen } from "@testing-library/react";
import ImageCard from "../ImageCard";

describe("Checking ImageCard component", () => {
  it("contains alt actor and have class", () => {
    render(<ImageCard />);
    expect(screen.getByAltText(/from the shooting/i)).toHaveClass(
      "imageBanner"
    );
  });
});
