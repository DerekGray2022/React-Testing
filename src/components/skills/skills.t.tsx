import { logRoles, render, screen } from "@testing-library/react";

import Skills from "./skills";
import skills from "./skillItems";

describe("Skills", () => {
  //  Page renders
  test("render correctly", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  //  List of skills renders
  test("render a list of skills", () => {
    render(<Skills skills={skills} />);

    const listItemElement = screen.getAllByRole("listitem");
    expect(listItemElement).toHaveLength(4); /*  skills.length   */
  });

  //  Login button renders
  test("render login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  //  'Start Learning' button DOES NOT render
  test("Start Learning button NOT rendered", () => {
    render(<Skills skills={skills} />);

    const learningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(learningButton).not.toBeInTheDocument();
  });

  //  'Start Learning' button EVENTUALLY renders
  test("Start Learning button eventually renders", async () => {
    render(<Skills skills={skills} />);

    //      LOG ROLES
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);

    //      SCREEN DEBUG
    // screen.debug();
    const startButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      }
    );
    // screen.debug();

    expect(startButton).toBeInTheDocument();
  });
});
