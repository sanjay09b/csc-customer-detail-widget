import { render } from "@testing-library/react";
import React from "react";
import OrderDetails from "../widget/OrderDetails/OrderDetails";

describe("AccountDetails", () => {
  test("renders", () => {
    const content = {
      parcels: 8,
      OrderId: "787614311",
      Category: "Category 1",
      Status: "Status 1",
      paymentType: "paymentType 1",
      paymentAmount: 71,
      transactionType: 1680519467,
      orderedOn: 1680519467,
      estDeliveryDate: 1680519467,
      orderedProducts: [
        " https://www.sephora.com/productimages/sku/s513168-main-zoom.jpg?imwidth=315",
        "https://www.sephora.com/productimages/sku/s2672160-main-zoom.jpg",
        "https://www.sephora.com/productimages/sku/s2672756-main-zoom.jpg?imwidth=230",
        "https://www.sephora.com/productimages/sku/s2659357-main-zoom.jpg",
        "https://www.sephora.com/productimages/sku/s2668879-main-zoom.jpg?imwidth=230",
        "https://www.sephora.com/productimages/sku/s2654515-main-zoom.jpg",
      ],
      status: "purchased",
      id: "1",
      customerId: "641016776",
    };
    render(<OrderDetails data={content} />);
  });
});
