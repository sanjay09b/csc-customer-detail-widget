import { render } from "@testing-library/react";
import React from "react";
import OrderedProductImage from "../widget/orderedProductsimage/OrderedProductImage";

describe("AccountDetails", () => {
  test("renders", () => {
    const orderedProducts = [
      " https://www.sephora.com/productimages/sku/s513168-main-zoom.jpg?imwidth=315",
    ];
    render(<OrderedProductImage orderedProductsUrl={orderedProducts} />);
  });
});
