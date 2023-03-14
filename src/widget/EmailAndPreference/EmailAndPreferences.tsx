import React from "react";
import Header from "./Header";
import SeparationLineLite from "../SeparationLine/SeparationLineLite";
import SeparationLine from "../SeparationLine/SeparationLine";
import PromotionalEmail from "./PromotionalEmail";
import Notificatios from "./NotificationsAndReminders";
import PostalMail from "./PostalMail";

const EmailAndPreferences = () => {
  const information = {
    promotionalStatus: "Subscribed",
    frequency: "All offers",
    country: "United States",
    postalCode: "686141",
    notificationStatus: "Subscribed",
    postalStatus: "Subscribed",
  };
  return (
    <>
      <Header />
      <SeparationLine />
      <PromotionalEmail information={information} />
      <SeparationLineLite />
      <Notificatios information={information} />
      <SeparationLineLite />
      <PostalMail information={information} />
    </>
  );
};

export default EmailAndPreferences;
