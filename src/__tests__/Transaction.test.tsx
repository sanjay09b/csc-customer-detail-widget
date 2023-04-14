import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Transaction from "../widget/TransactionHistory/Transaction";
import axios, { AxiosResponse } from "axios";

describe("transactionTesting", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render Transaction data", async () => {
    const mAxiosResponse = {
      data: [
        {
          paymentAmount: 71,
          parcels: 26,
          OrderId: "137350131",
          Category: "POWEL 123",
          Status: "Status 1",
        },
      ],
    } as AxiosResponse;
    jest.spyOn(axios, "get").mockResolvedValueOnce(mAxiosResponse);

    render(<Transaction />);

    waitFor(() => expect(screen.findByText("POWEL 123")).toBeInTheDocument());

    waitFor(() => expect(screen.findByText("Status 1")).toBeInTheDocument());
  });
  it("should render Transaction data", async () => {
    const mAxiosResponse = {
      data: null,
    } as AxiosResponse;
    jest.spyOn(axios, "get").mockResolvedValueOnce(mAxiosResponse);

    render(<Transaction />);
  });
});
