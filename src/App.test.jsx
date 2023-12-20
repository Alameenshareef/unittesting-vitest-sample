import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import App from "./App";
import { userEvent } from "@testing-library/user-event";

describe("App", () => {
  // it('Checking if H1 exist inside the component', () => {
  //    render(<App />)
  //    const pageHeader = screen.getByRole("heading",{
  //     name: "Hello 1"
  //    })
  //    expect(pageHeader).toBeInTheDocument()
  //    const subHeader = screen.getByRole("heading",{
  //     name: "Hello 2"
  //    })
  //    expect(subHeader).toBeInTheDocument()
  //    expect(screen.getByText("Hello h2"))  // to test directly like this

  //     it('Checking if span exist inside the component', () => {
  //         render(<App />)
  //        expect(screen.getByTestId('span')).toBeInTheDocument()  // check with the id
  // })
  it("User interaction", async () => {
    userEvent.setup();
    render(<App />);
    const beforeIncrement = screen.getByTestId("span");
    expect(beforeIncrement).toHaveTextContent(0);

    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton); // to check the button click event

    const afterIncrement = screen.getByTestId("span");
    expect(afterIncrement).toHaveTextContent(1);

    const input = screen.getByRole("textbox"); // to check the typing event
    await userEvent.type(input, "10");
    expect(input).toHaveValue();
  });
});
