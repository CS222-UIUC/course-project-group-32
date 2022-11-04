import { getByTestId, render } from "@testing-library/react";
import Tutorial from "./Tutorial";


test("tutorial exists", () => {
    const { getByRole } = render(<Tutorial />);
    const name = getByRole('tutorial-exists');
    expect(name).toBeInTheDocument()
});