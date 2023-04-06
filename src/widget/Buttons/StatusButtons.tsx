import React from "react";
import CustomStyles from "../CustomStyles";

const StatusButtons = (props: { status: string }): JSX.Element => {
  switch (props.status) {
    case "Active":
      return <div className={CustomStyles.statusButtons.active}>Active</div>;
    case "Deactivated":
      return (
        <div className={CustomStyles.statusButtons.deactivated}>
          Deactivated
        </div>
      );
    case "Fraud":
      return <div className={CustomStyles.statusButtons.fraud}>Fraud</div>;
    case "Banned":
      return <div className={CustomStyles.statusButtons.banned}>Banned</div>;
    case "Suspended":
      return (
        <div className={CustomStyles.statusButtons.suspended}>Suspended</div>
      );
    default:
      return <div>Unknown Error</div>;
  }
};

export default StatusButtons;
