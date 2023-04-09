import React from "react";

const OrderedProductImage = (props: { orderedProductsUrl: string[] }) => {
  return (
    <div className="tw-flex tw-mt-2 ">
      {props.orderedProductsUrl?.map((images: any) => {
        return (
          <img
            data-testid="imagetesting"
            key={images}
            className="tw-h-10 tw-w-10"
            src={images}
            alt="image"
          />
        );
      })}
    </div>
  );
};
export default OrderedProductImage;
