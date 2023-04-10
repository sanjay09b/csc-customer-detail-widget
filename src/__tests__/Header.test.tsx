import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Header from "../widget/CustomerHeader/Header";

const mockUserData = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phoneNumber: "+1 (555) 123-4567",
  risk: "Low",
  activeStatus: "Active",
};

const mockApiUrl =
  "https://6409df426ecd4f9e18bdd647.mockapi.io/api/v1/customers/641016776/customer";

describe("Header component", () => {
  let mockAxios: MockAdapter;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  it("renders the user data when the API request is successful", async () => {
    mockAxios.onGet(mockApiUrl).reply(200, { customerDetails: [mockUserData] });

    render(<Header />);

    await waitFor(() => expect(mockAxios.history.get.length).toBe(1));

    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    expect(
      screen.getByText(`${mockUserData.firstName} ${mockUserData.lastName}`),
    ).toBeInTheDocument();
    expect(screen.getByText(`Visit client on Sephora.com`)).toBeInTheDocument();
    expect(screen.getByText(`${mockUserData.email}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockUserData.phoneNumber}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockUserData.risk}`)).toBeInTheDocument();
  });
});
