import { render, screen, act } from "@testing-library/react";
import Counter from "./Counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  //      DOCUMENT RENDERS CORRECTLY
  test("renders correctly", () => {
    render(<Counter />);

    //  Count Number
    const countElement = screen.getByRole("heading", {
      level: 2,
    });
    expect(countElement).toBeInTheDocument();

    //  Increment Button
    const buttonElement = screen.getByRole("button", {
      name: /Increment/i,
    });
    expect(buttonElement).toBeInTheDocument();
  });

  //      COUNTER RENDERS '0' ON PAGE LOAD
  test("should render a count of 0", () => {
    render(<Counter />);
// 
    const countElement = screen.getByRole("heading", {
      level: 2,
    });
    expect(countElement).toHaveTextContent("0");
  });

  //      CLICKING BUTTON INCREMENTS COUNT TO 1
  test("Clicking button increments count to 1", async () => {
    user.setup();
    render(<Counter />);

    const incrementCount = screen.getByRole("button", {
      name: /Increment/i,
    });
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => user.click(incrementCount));

    const countElement = screen.getByRole("heading", {
      level: 2,
    });
    expect(countElement).toHaveTextContent("1");
  });

  //      CLICKING BUTTON AGAIN INCREMENTS COUNT TO 2
  test("Clicking again increments count to 2", async () => {
    user.setup();
    render(<Counter />);

    const incrementCount = screen.getByRole("button", {
      name: /Increment/i,
    });
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => user.click(incrementCount));
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => user.click(incrementCount));

    const countElement = screen.getByRole("heading", {
      level: 2,
    });
    expect(countElement).toHaveTextContent("2");
  });

  //      COUNT SET TO 10 ON CLICKING 'SET NUMBER'
  test("set count to 10 on clicking set number button", async () => {
    user.setup();
    render(<Counter />);

    const inputElement = screen.getByRole("spinbutton");
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => user.type(inputElement, "10"));
    expect(inputElement).toHaveValue(10);

    const setButton = screen.getByRole("button", {
      name: /^set/i,
    });
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => user.click(setButton));
    const countElement = screen.getByRole("heading", {
      level: 2,
    });
    expect(countElement).toHaveTextContent("10");
  });

  //      ELEMENTS FOCUS IN RIGHT ORDER
  test("elements focus in right order", async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const decrementButton = screen.getByRole("button", { name: /decrement/i });
    const inputElement = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: /^set/i });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => user.tab());
    expect(incrementButton).toHaveFocus();
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => user.tab());
    expect(decrementButton).toHaveFocus();
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => user.tab());
    expect(inputElement).toHaveFocus();
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => user.tab());
    expect(setButton).toHaveFocus();
  });
});
