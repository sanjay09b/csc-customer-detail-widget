import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Notes from "../widget/notes/Notes";
import axios, { AxiosResponse } from "axios";

describe("Notes", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("renders", () => {
    render(<Notes />);
  });

  it("should render Notes data of below count 4", async () => {
    const mAxiosResponse = {
      data: [
        {
          createdAt: 1680493040,
          orderId: 0,
          contact: "xyz",
          description:
            "Repellendus pariatur consequatur. Aperiam ipsum tempore explicabo dignissimos. Illum voluptate dicta distinctio animi quos ipsam. Molestiae delectus maiores itaque. Eum quibusdam quibusdam ipsa praesentium eum. Sint reiciendis saepe voluptates deleniti dolore amet est at beatae.",
          id: "1",
          customerId: "641016776",
        },
      ],
    } as AxiosResponse;
    jest.spyOn(axios, "get").mockResolvedValueOnce(mAxiosResponse);
    render(<Notes />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    waitFor(() => expect(screen.findByText("xyz")).toBeInTheDocument());
    waitFor(() =>
      expect(
        screen.findByText(
          "Repellendus pariatur consequatur. Aperiam ipsum tempore explicabo dignissimos. Illum voluptate dicta distinctio animi quos ipsam. Molestiae delectus maiores itaque. Eum quibusdam quibusdam ipsa praesentium eum. Sint reiciendis saepe voluptates deleniti dolore amet est at beatae.",
        ),
      ).toBeInTheDocument(),
    );
  });

  it("should render No Notes", async () => {
    const mAxiosResponse = {
      data: null,
    } as AxiosResponse;
    jest.spyOn(axios, "get").mockResolvedValueOnce(mAxiosResponse);
    render(<Notes />);
  });

  it("should render Notes data of above count 4", async () => {
    const mAxiosResponse = {
      data: [
        {
          createdAt: 1680492860,
          orderId: 423880467,
          contact: "tempore",
          description:
            "Illum adipisci assumenda vero. Quo quaerat praesentium laboriosam nam veniam laboriosam omnis magni corporis. Laboriosam fugit eum nisi tempora ab tenetur dolore commodi mollitia. Eos commodi fugiat odit quaerat quas neque. Voluptates quos iste eum adipisci eaque occaecati.",
          id: "49",
          customerId: "64101677",
        },
        {
          createdAt: 1680492800,
          orderId: 423880467,
          contact: "culpa",
          description:
            "Doloribus voluptatibus molestiae recusandae dolor ea. Incidunt illum ea architecto officiis perferendis exercitationem qui ducimus. Mollitia incidunt itaque omnis fugiat aliquid.",
          id: "51",
          customerId: "641016779",
        },
        {
          createdAt: 1680492740,
          orderId: 352106238,
          contact: "expedita",
          description:
            "Labore delectus consectetur. Itaque ab alias quod officia repudiandae excepturi repellendus sunt inventore. Recusandae exercitationem ab deleniti ab itaque harum. Aut amet quod consequuntur sed earum minima. Dolores dolores sint repudiandae dolorem facere minus id. Quod necessitatibus at incidunt esse illum nulla rem.",
          id: "26",
          customerId: "64101677",
        },
        {
          createdAt: 1680492680,
          orderId: "612438633",
          contact: "ea",
          description:
            "Deserunt labore nemo pariatur quam. Sit dicta architecto enim. Enim animi sunt fuga culpa ab quis officia adipisci. Minus tempore in ipsa debitis. Adipisci dolor modi totam ducimus inventore voluptatibus.",
          id: "70",
          customerId: "64101677723",
        },
        {
          createdAt: 1680492620,
          orderId: 715752685,
          contact: "hic",
          description:
            "Recusandae veritatis ipsam eaque nemo. Culpa quae harum vitae harum a eius cumque. Neque nobis recusandae nulla animi. Animi nostrum deserunt eos. Ut hic accusamus possimus veritatis iure eum.",
          id: "118",
          customerId: "641016779",
        },
        {
          createdAt: 1680492560,
          orderId: 674448344,
          contact: "nesciunt",
          description:
            "Cupiditate reiciendis sapiente repellendus fugiat ipsum quidem maxime. Architecto eligendi earum. Nam quia quo veritatis magnam quidem debitis distinctio. Molestiae aut consequatur similique illo occaecati iusto. Enim aperiam nostrum hic amet illum similique ducimus amet.",
          id: "119",
          customerId: "6410167753",
        },
        ,
      ],
    } as AxiosResponse;
    jest.spyOn(axios, "get").mockResolvedValueOnce(mAxiosResponse);
    render(<Notes />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    waitFor(() => expect(screen.findByText("nesciunt")).toBeInTheDocument());
    
  });
});
