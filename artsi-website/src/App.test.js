import { getByTestId, render } from "@testing-library/react";
import App from "./App";


test("app exists", () => {
    const { getByRole } = render(<App />);
    const name = getByRole('app-exists');
    expect(name).toBeInTheDocument()
});