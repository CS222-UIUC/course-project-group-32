import { getByTestId, render } from "@testing-library/react";
import Create from './Create'


test("name textbox gets input", () => {
    const { getByRole } = render(<Create />);
    const name = getByRole('video-name');
    expect(name).toBeInTheDocument()
});

test("description textbox gets input", () => {
    const { getByRole } = render(<Create />);
    const desc = getByRole('description');
    expect(desc).toBeInTheDocument()
});

test("container", () => {
    const { getByRole } = render(<Create />);
    const desc = getByRole('cont-test');
    expect(desc).toBeInTheDocument()
});
  