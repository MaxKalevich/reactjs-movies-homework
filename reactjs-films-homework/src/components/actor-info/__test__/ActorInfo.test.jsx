import { render, screen } from "@testing-library/react";
import ActorInfo from "../ActorInfo";

describe("Checking ActorInfo component", () => {
  it("snapshot", () => {
    const { asFragment } = render(<ActorInfo />);
    expect(asFragment(<ActorInfo />)).toMatchSnapshot();
  });
  it("Contains text 'Birthday'", () => {
    render(<ActorInfo />);
    const linkElement = screen.getByText(/Birthday/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("Contains text 'Place Of Birth'", () => {
    render(<ActorInfo />);
    const linkElement = screen.getByText(/Place Of Birth/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("Contains text 'Biography'", () => {
    render(<ActorInfo />);
    const linkElement = screen.getByText(/Biography/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("Contains text 'Photos'", () => {
    render(<ActorInfo />);
    const linkElement = screen.getByText(/Photos/i);
    expect(linkElement).toBeInTheDocument();
  });
});
