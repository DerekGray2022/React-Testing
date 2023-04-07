/*
Greet should render the text 'Hello' and if a name is passed into the component, it should render 'Hello, ' followed by the name.
*/

import { render, screen } from "@testing-library/react";
import Greet from "./greet";

//      Grouped TESTS
describe("Greet", () => {
  //      TEST: Greet Renders Correctly
  test("renders correctly", () => {
    render(<Greet />);
    const textEle = screen.getByText(/Hello/);
    expect(textEle).toBeInTheDocument();
  });
});

describe("Nested", () => {
  //      TEST: Greet Renders with Name
  test("Renders  with Name", () => {
    render(<Greet name="Juan" />);
    const textEle = screen.getByText(/hello, juan/i);
    expect(textEle).toBeInTheDocument();
  });
});
