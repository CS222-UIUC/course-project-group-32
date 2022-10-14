import { getByTestId, render } from "@testing-library/react";
import Create from './Create'
import Profile from "./Profile";


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

// test("username exists", () => {
//     const { getByTestId } = render(
//       <Profile username="raul" />, {wrapper: MemoryRouter}
//     );
//     // get test id contains multiple ids
//     //expect == assert
    
//     expect(getByTestId(/username/i).textContent).toBe("raul");
//   });
  
//   test("name exists", () => {
//       const { getByTestId } = render(
//         <Profile username="raul" firstname="raul" lastname="higareda"/>, {wrapper: MemoryRouter}
//       );
//       expect(getByTestId('name').textContent).toBe("raul higareda");
//   });
  