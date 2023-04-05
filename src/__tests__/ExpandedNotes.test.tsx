import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { ExpandedNotes, noteType } from "../widget/ExpandedTable/ExpandedNotes";

const mock = new MockAdapter(axios);

describe("ExpandedNotes", () => {
  it("should render loading text before notes are fetched", async () => {
    mock
      .onGet("https://6409df426ecd4f9e18bdd647.mockapi.io/api/v1/notesData")
      .reply(200, []);
    render(<ExpandedNotes />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    await waitFor(() =>
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument(),
    );
  });

  it("should render notes data", async () => {
    const notesData = [
      {
        notesId: 1,
        date: "2022-03-31",
        csrId: "CSR-1234",
        type: "Order",
        orderId: "ORD-1234",
        contact: "John Smith",
        description: "Some description",
      },
      {
        notesId: 2,
        date: "2022-03-30",
        csrId: "CSR-5678",
        type: "System",
        orderId: "",
        contact: "Jane Doe",
        description: "Another description",
      },
    ];
    mock
      .onGet("https://6409df426ecd4f9e18bdd647.mockapi.io/api/v1/notesData")
      .reply(200, notesData);
    render(<ExpandedNotes />);
    await waitFor(() =>
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument(),
    );
    expect(screen.getByText("2022-03-31")).toBeInTheDocument();
    expect(screen.getByText("CSR-1234")).toBeInTheDocument();
    expect(screen.getByText("ORD-1234")).toBeInTheDocument();
    expect(screen.getByText("John Smith")).toBeInTheDocument();
    expect(screen.getByText("Some description")).toBeInTheDocument();
    expect(screen.getByText("2022-03-30")).toBeInTheDocument();
    expect(screen.getByText("CSR-5678")).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("Another description")).toBeInTheDocument();
  });

  it("should render Unknown Error message for unknown note type", async () => {
    const notesData = [
      {
        notesId: 1,
        date: "2022-03-31",
        csrId: "CSR-1234",
        type: "Unknown",
        orderId: "",
        contact: "John Smith",
        description: "Some description",
      },
    ];
    mock
      .onGet("https://6409df426ecd4f9e18bdd647.mockapi.io/api/v1/notesData")
      .reply(200, notesData);
    render(<ExpandedNotes />);
    await waitFor(() =>
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument(),
    );
    expect(screen.getByText("Unknown Error")).toBeInTheDocument();
  });

  it("should handle error when notes fetch fails", async () => {
    mock
      .onGet("https://6409df426ecd4f9e18bdd647.mockapi.io/api/v1/notesData")
      .reply(500);
    render(<ExpandedNotes />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    await waitFor(() =>
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument(),
    );
    //  expect(screen.getByText("Error fetching notes data")).toBeInTheDocument();
  });
});
