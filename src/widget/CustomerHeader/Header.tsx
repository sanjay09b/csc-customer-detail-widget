import React, { useEffect, useState } from "react";
import axios from "axios";
import VerticalLine from "../SeparationLine/VerticalLine";
import RedirectButton from "../RedirectButton/RedirectButton";
import { CustomerHeader } from "../Interface";
// import StatusButton from "../Utility/StatusButton";
import ActiveStatusButton from "../StatusButtons/ActiveStatusButton";
import DeactivatedStatusButton from "../StatusButtons/DeactivatedStatusButton";
import FraudStatusButton from "../StatusButtons/FraudStatusButton";
import BannedStatusButton from "../StatusButtons/BannedStatusButton";
import SuspendedStatusButton from "../StatusButtons/SuspendedStatusButton";
import CustomStyle from "../CustomStyles";

const statusButton = (status): JSX.Element | null => {
  switch (status) {
    case "Active":
      return <ActiveStatusButton />;
    case "Deactivated":
      return <DeactivatedStatusButton />;
    case "Fraud":
      return <FraudStatusButton />;
    case "Banned":
      return <BannedStatusButton />;
    case "Suspended":
      return <SuspendedStatusButton />;
    default:
      return <div>Unknown Error</div>;
  }
};

const Header = (): JSX.Element => {
  const [userData, setUserData] = useState<CustomerHeader>();
  const [loading, setLoading] = useState(true);

  useEffect((): void => {
    const url: string =
      "https://6409df426ecd4f9e18bdd647.mockapi.io/api/v1/customers/641016776/customer";
    async function getUserData() {
      try {
        if (loading) {
          const response = await axios.get(url);
          setUserData(response.data.customerDetails[0]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getUserData();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className={CustomStyle.customerHeader.alignRow}>
            <div className={CustomStyle.customerHeader.nameStatusWrapper}>
              <div className={CustomStyle.customerHeader.name}>
                {userData.firstName} {userData.lastName}
              </div>
              {statusButton(userData.activeStatus)}
            </div>
            <div className={CustomStyle.customerHeader.redirectPositionWrapper}>
              <div
                className={CustomStyle.customerHeader.sephoraRedirectWrapper}
              >
                <span className={CustomStyle.customerHeader.sephoraRedirect}>
                  Visit client on Sephora.com
                </span>
                <RedirectButton />
              </div>
            </div>
          </div>
          <div className={CustomStyle.customerHeader.alignRowWithSpace}>
            <div className={CustomStyle.customerHeader.centerAlign}>
              {userData.email}
            </div>
            <VerticalLine />
            <div className={CustomStyle.customerHeader.centerAlign}>
              {userData.phoneNumber}
            </div>
            <VerticalLine />
            <div className={CustomStyle.customerHeader.centerAlign}>
              {userData.risk}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export { Header, statusButton };
