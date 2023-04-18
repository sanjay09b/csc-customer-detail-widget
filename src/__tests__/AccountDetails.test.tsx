import { render, screen } from "@testing-library/react";
import React from "react";
import {
  AccountDetails,
  BIStatusImage,
} from "../widget/AccountAndBIDetails/AccountDetails";
import { rouge ,vib,beautyInsider} from "../widget/images/image";
import axios, { AxiosResponse } from "axios";
jest.mock("axios");
describe("Account Details", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("render rouge image", () => {
    const BIRouge = BIStatusImage("rouge");
    expect(BIRouge).toEqual(rouge);
  });
  it("render vib image", () => {
    const BIRouge = BIStatusImage("vib");
    expect(BIRouge).toEqual(vib);
  });
  it("render beautyInsider image", () => {
    const BIRouge = BIStatusImage("beautyInsider");
    expect(BIRouge).toEqual(beautyInsider);
  });
  it("should render Accound Details", async () => {
    const mAxiosResponse = {
      data: [
        {
          YTDSpend: 123,
          BIPoints: 123,
          birthMonth: 12,
          birthDate: 31,
          birthYear: 2001,
          profileId: 60378,
          birthdayGift: "Redeemed",
          CRMId: "CRMId 2",
          USAId: "991",
          shippingAddress: {
            building: "498",
            street: "Larkin",
            state: "South Dakota",
            city: "The Villages",
            pinCode: "27544",
            country: "Ireland",
          },
          billingAddress: {
            building: "498",
            street: "Larkin",
            state: "South Dakota",
            city: "The Villages",
            pinCode: "27544",
            country: "Ireland",
          },
        },
      ],
    } as AxiosResponse;
    jest.spyOn(axios, "get").mockResolvedValueOnce(mAxiosResponse);
    render(<AccountDetails />);
    expect(screen.getByText("Loading")).toBeInTheDocument();
    expect(await screen.findByText("Redeemed")).toBeInTheDocument();
    expect(await screen.findByText("CRMId 2")).toBeInTheDocument();    
    expect(await screen.findByText("991")).toBeInTheDocument();  
  });
  it("should render Accound Details", async () => {
    const mAxiosResponse = {
      data: [
        {
          YTDSpend: 123,
          BIPoints: 123,
          birthMonth: 12,
          birthDate: 31,
          birthYear: 2001,
          profileId: 60378,
          birthdayGift: "",
          CRMId: "CRMId 2",
          USAId: "991",
          shippingAddress: {
            building: "498",
            street: "Larkin",
            state: "South Dakota",
            city: "The Villages",
            pinCode: "27544",
            country: "Ireland",
          },
          billingAddress: {
            building: "498",
            street: "Larkin",
            state: "South Dakota",
            city: "The Villages",
            pinCode: "27544",
            country: "Ireland",
          },
        },
      ],
    } as AxiosResponse;
    jest.spyOn(axios, "get").mockResolvedValueOnce(mAxiosResponse);
    render(<AccountDetails />);
    expect(screen.getByText("Loading")).toBeInTheDocument();
    expect(await screen.findByText("Not Redeemed")).toBeInTheDocument();
    expect(await screen.findByText("CRMId 2")).toBeInTheDocument();    
    expect(await screen.findByText("991")).toBeInTheDocument();   
  });

});
























