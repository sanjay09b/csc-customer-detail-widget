import React from "react";
import { render } from "@testing-library/react";
import NoteTypeButton from "../widget/Buttons/NoteTypeButtons";

describe("StatusButtons", () => {
  it("renders Active button when status prop is Active", () => {
    const { getByText } = render(<NoteTypeButton noteType="Order" />);
    const activeButton = getByText("Order");
    expect(activeButton).toBeInTheDocument();
  });

  it("renders Deactivated button when status prop is Deactivated", () => {
    const { getByText } = render(<NoteTypeButton noteType="System" />);
    const deactivatedButton = getByText("System");
    expect(deactivatedButton).toBeInTheDocument();
  });

  it("renders Fraud button when status prop is Fraud", () => {
    const { getByText } = render(<NoteTypeButton noteType="Profile" />);
    const fraudButton = getByText("Profile");
    expect(fraudButton).toBeInTheDocument();
  });

  it("renders Unknown Error message when status prop is not any of the expected values", () => {
    const { getByText } = render(<NoteTypeButton noteType="Unknown" />);
    const unknownError = getByText("Unknown Error");
    expect(unknownError).toBeInTheDocument();
  });
});
