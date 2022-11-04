import { getByTestId, render } from "@testing-library/react";
import Home from "./Home";
import { MemoryRouter } from 'react-router-dom';


test("home text", () => {
    const { getByRole } = render(
        <Home />, {wrapper: MemoryRouter}
      );
    const name = getByRole('home-exists');
    expect(name).toBeInTheDocument()
});