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
          id: 1,
          orderedProducts: "https://example.com/product/1",
          transactionDate: "2022-04-01",
          amount: 100,
        },
        {
          id: 2,
          orderedProducts: "https://example.com/product/2",
          transactionDate: "2022-04-02",
          amount: 200,
        },
        {
          id: 3,
          orderedProducts: "electroic item",
          transactionDate: "2022-04-03",
          amount: 300,
        },
      ],
    } as AxiosResponse;
    jest.spyOn(axios, "get").mockResolvedValueOnce(mAxiosResponse);

    render(<Transaction />);

    waitFor(() => expect(screen.findByText("2022-04-01")).toBeInTheDocument());

    waitFor(() =>
      expect(screen.findByText("electroic item")).toBeInTheDocument(),
    );
  });
  it("should render Transaction data", async () => {
    const mAxiosResponse = {
      data: null,
    } as AxiosResponse;
    jest.spyOn(axios, "get").mockResolvedValueOnce(mAxiosResponse);

    render(<Transaction />);
  });
});

