import { getByTestId, render } from "@testing-library/react";
import Card from './Card'
import { MemoryRouter } from 'react-router-dom';


test("card exists", () => {
    const { getByRole } = render(
        <Card />, {wrapper: MemoryRouter}
      );
    const name = getByRole('card-test');
    expect(name).toBeInTheDocument()
});