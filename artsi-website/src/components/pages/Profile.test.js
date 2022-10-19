import { render } from "@testing-library/react";
import Profile from './Profile'
import { MemoryRouter } from 'react-router-dom';

test("username exists", () => {
  const { getByTestId } = render(
    <Profile username="raul" />, {wrapper: MemoryRouter}
  );
  // get test id contains multiple ids
  //expect == assert
  
  expect(getByTestId(/username/i).textContent).toBe("raul");
});

test("name exists", () => {
    const { getByTestId } = render(
      <Profile username="raul" firstname="raul" lastname="higareda"/>, {wrapper: MemoryRouter}
    );
    expect(getByTestId('name').textContent).toBe("raul higareda");
});
