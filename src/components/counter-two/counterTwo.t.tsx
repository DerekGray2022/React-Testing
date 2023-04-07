import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import CounterTwo from "./CounterTwo";

describe("Counter Two", () => {
  //  HEADER & COUNTER RENDER CORRECTLY
  test("should render correctly", () => {
    render(<CounterTwo count={0} />);

    //      Header
    const headingElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(headingElement).toBeInTheDocument();

    //      Counter
    const countElement = screen.getByRole("heading", {
      level: 2,
    });
    expect(countElement).toBeInTheDocument();
  });

  //      HANDLERS SHOULD BE CALLED
  user.setup();
  test("Handlers should be called", async () => {
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );

    //  Buttons
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
