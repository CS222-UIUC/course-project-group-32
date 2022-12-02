import { getByTestId, render } from "@testing-library/react";
import Tutorial from './Tutorial'



test("button highlight", () => {
    const { getByRole } = render(<Tutorial />);
    const name = getByRole("heart");
    
});

test("button highlight changes color", () => {
    const { getByRole } = render(<Tutorial />);
    const name = getByRole("bookmark");
    
    
});