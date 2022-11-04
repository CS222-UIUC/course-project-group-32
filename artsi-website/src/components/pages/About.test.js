import { getByTestId, render } from "@testing-library/react";
import About from "./About";


test("about-text", () => {
    const { getByRole } = render(<About />);
    const name = getByRole('about-text');
    expect(name).toBeInTheDocument()
});
  