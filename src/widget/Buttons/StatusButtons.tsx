import React from "react";
import customStyle from "../customStyle";

const StatusButtons = (props: { status: string }): JSX.Element => {
  switch (props.status) {
    case "Active":
      return <div className={customStyle.statusButtons.active}>Active</div>;
    case "Deactivated":
      return (
        <div className={customStyle.statusButtons.deactivated}>Deactivated</div>
      );
    case "Fraud":
      return <div className={customStyle.statusButtons.fraud}>Fraud</div>;
    case "Banned":
      return <div className={customStyle.statusButtons.banned}>Banned</div>;
    case "Suspended":
      return (
        <div className={customStyle.statusButtons.suspended}>Suspended</div>
      );
    default:
      return <div>Unknown Error</div>;
  }
};

export default StatusButtons;
