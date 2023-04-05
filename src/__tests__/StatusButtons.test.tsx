import React from "react";
import { render } from "@testing-library/react";
import StatusButtons from "../widget/StatusButtons/StatusButtons";

describe("StatusButtons", () => {
  it("renders Active button when status prop is Active", () => {
    const { getByText } = render(<StatusButtons status="Active" />);
    const activeButton = getByText("Active");
    expect(activeButton).toBeInTheDocument();
  });

  it("renders Deactivated button when status prop is Deactivated", () => {
    const { getByText } = render(<StatusButtons status="Deactivated" />);
    const deactivatedButton = getByText("Deactivated");
    expect(deactivatedButton).toBeInTheDocument();
  });

  it("renders Fraud button when status prop is Fraud", () => {
    const { getByText } = render(<StatusButtons status="Fraud" />);
    const fraudButton = getByText("Fraud");
    expect(fraudButton).toBeInTheDocument();
  });

  it("renders Banned button when status prop is Banned", () => {
    const { getByText } = render(<StatusButtons status="Banned" />);
    const bannedButton = getByText("Banned");
    expect(bannedButton).toBeInTheDocument();
  });

  it("renders Suspended button when status prop is Suspended", () => {
    const { getByText } = render(<StatusButtons status="Suspended" />);
    const suspendedButton = getByText("Suspended");
    expect(suspendedButton).toBeInTheDocument();
  });

  it("renders Unknown Error message when status prop is not any of the expected values", () => {
    const { getByText } = render(<StatusButtons status="Unknown" />);
    const unknownError = getByText("Unknown Error");
    expect(unknownError).toBeInTheDocument();
  });
});
