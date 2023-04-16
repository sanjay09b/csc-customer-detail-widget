import React from "react";
import customStyle from "../customStyle";
import getDate from "../DateFormatter/DateFormatter";
import image from "../image/rightarrow.svg";
import { TransactionDetails } from "../Interface";
import Payment from "../payment/Payment";

const OrderDetails = (props: { data: TransactionDetails }) => {
  return (
    <>
      <>
        <div className="tw-flex tw-mt-2 ">
          <div className={customStyle.orderId}>Order #{props.data.OrderId}</div>
          <div className={customStyle.rightArrow}>
            <img src={image} alt="" />
          </div>
        </div>

        <div className={customStyle.order}>
          <div className={customStyle.category}>{props.data.Category}</div>
          <div className={customStyle.status}>{props.data.Status}</div>
        </div>
        <div className={customStyle.parcelamount}>
          <div className={customStyle.parcels}>Parcels</div>
          <div className="">{props.data.parcels}</div>
        </div>
        <div className={customStyle.paymentamount}>
          <div className={customStyle.payment}>Payment</div>
          <div className={customStyle.paymentValue}>
            <div className="">${props.data.paymentAmount}</div>
            <div>
              <Payment pay={props.data.paymentType} />
            </div>
          </div>
        </div>
        {props.data.transactionType ? (
          <div className={customStyle.transactionDate}>
            <div className={customStyle.dates}>Date</div>
            <div
              className={customStyle.paymentDate}
              key={props.data.transactionType}
            >
              {getDate(props.data.transactionType)}
            </div>
          </div>
        ) : null}
        <div>
          {props.data.orderedOn ? (
            <div className={customStyle.orderDate}>
              <div className={customStyle.orderedOn}>Ordered on</div>
              <div className={customStyle.orderon} key={props.data.orderedOn}>
                {getDate(props.data.orderedOn)}
              </div>
            </div>
          ) : null}
        </div>
        <div>
          {props.data.estDeliveryDate ? (
            <div className={customStyle.estDelivery}>
              <div className={customStyle.EstDelivery}>Est.Delivery</div>
              <div className={customStyle.EstDate}>
                <div className={customStyle.deliveryDate}>Date</div>
                <div
                  className={customStyle.DeliveryDate}
                  key={props.data.estDeliveryDate}
                >
                  {getDate(props.data.estDeliveryDate)}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </>
    </>
  );
};

export default OrderDetails;
