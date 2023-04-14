import image from "../image/payment_giftcard.svg";

const Payment = (props: { pay: string }): JSX.Element => {
  return (
    (props.pay === "Sephora" ? (
      <div>
        <img className="tw-h-5" src={image} alt="" />
      </div>
    ) : null) ||
    (props.pay === "visa" ? (
      <div>
        <img className="tw-h-5" src={image} alt="" />
      </div>
    ) : null)
  );
};

export default Payment;
