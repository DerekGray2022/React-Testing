import { render, screen } from "@testing-library/react";
import Application from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    //      GET BY ROLE     ////
    //  Heading: H1
    const h1Element = screen.getByRole("heading", {
      level: 1,
    });
    expect(h1Element).toBeInTheDocument();

    // Heading: H2
    const h2Element = screen.getByRole("heading", {
      level: 2,
    });
    expect(h2Element).toBeInTheDocument();

    //  Input: Name
    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    //  Textbox: Bio
    const bioElement = screen.getByRole("textbox", {
      name: "Biog",
    });
    expect(bioElement).toBeInTheDocument();

    //  Select: Dropdown
    const jobLocationEle = screen.getByRole("combobox");
    expect(jobLocationEle).toBeInTheDocument();

    //  Checkbox: T's & C's
    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    //  Button: Submit
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeDisabled();

    //      GET BY LABEL TEXT
    const nameElement2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElement2).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(/^I agree to/);
    expect(termsElement2).toBeInTheDocument();

    //      GET BY PLACEHOLDER TEXT
    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();

    //      GET BY TEXT
    const paragraphElement = screen.getByText("All fields", { exact: false });
    expect(paragraphElement).toBeInTheDocument();

    //      GET BY DISPLAY VALUE
    const nameElement4 = screen.getByDisplayValue("Juan Kerr");
    expect(nameElement4).toBeInTheDocument();

    //      GET BY ALT TEXT
    const imgElement = screen.getByAltText((content) =>
      content.startsWith("a person")
    );
    expect(imgElement).toBeInTheDocument();

    //      GET BY TITLE
    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    //      GET BY TEST ID
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();
  });
});
