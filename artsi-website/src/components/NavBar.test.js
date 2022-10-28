import { getByTestId, render } from "@testing-library/react";
import NavBar from "./Navbar";
import { MemoryRouter } from 'react-router-dom';


test("nav exists", () => {
    const { getByRole } = render(
        <NavBar />, {wrapper: MemoryRouter}
      );
    const name = getByRole('nav-exists');
    expect(name).toBeInTheDocument()
});


