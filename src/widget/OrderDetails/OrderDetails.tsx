import React from "react";
import CustomStyles from "../CustomStyles/CustomStyles";
import getDate from "../DateFormatter/DateFormatter";
import image from "../image/rightarrow.svg";
import { TransactionDetails } from "../Interface";
import Payment from "../payment/Payment";

const OrderDetails = (props: { data: TransactionDetails }) => {
  //  <Payment />;
  return (
    <>
      {/* {props.userprops.data?.map((props.data: any): JSX.Element => { */}
      <>
        <div className="tw-flex tw-mt-4  ">
          <div className={CustomStyles.orderId}>
            Order #{props.data.OrderId}
          </div>
          <div className={CustomStyles.rightArrow}>
            <img src={image} alt="" />
          </div>
        </div>

        <div className={CustomStyles.order}>
          <div className={CustomStyles.category}>{props.data.Category}</div>
          <div className={CustomStyles.status}>{props.data.Status}</div>
        </div>
        <div className={CustomStyles.parcelamount}>
          <div className={CustomStyles.parcels}>Parcels</div>
          <div className="">{props.data.parcels}</div>
        </div>
        <div className={CustomStyles.paymentamount}>
          <div className={CustomStyles.payment}>Payment</div>
          <div className={CustomStyles.paymentValue}>
            <div className="">${props.data.paymentAmount}</div>
            <div>
              <Payment pay={props.data.paymentType} />
            </div>
          </div>
        </div>
        <div className={CustomStyles.transactionDate}>
          <div className={CustomStyles.date}>Date</div>
          <div
            className={CustomStyles.paymentDate}
            key={props.data.transactionType}
          >
            {getDate(props.data.transactionType)}
          </div>
        </div>
        <div>
          {props.data.orderedOn ? (
            <div className={CustomStyles.orderDate}>
              <div className={CustomStyles.orderedOn}>Ordered on</div>
              <div className={CustomStyles.orderon} key={props.data.orderedOn}>
                {getDate(props.data.orderedOn)}
              </div>
            </div>
          ) : null}
        </div>
        <div>
          {props.data.estDeliveryDate ? (
            <div className={CustomStyles.estDelivery}>
              <div className={CustomStyles.EstDelivery}>Est.Delivery</div>
              <div className={CustomStyles.EstDate}>
                <div className={CustomStyles.deliveryDate}>Date</div>
                <div
                  className={CustomStyles.DeliveryDate}
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
