import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { rouge, vib, beautyInsider } from "../images/image";
import customStyle from "../customStyle";
import { AccountDatas } from "../Interface";
import SeperationLine from "../SeperationLine/SeperationLine";

const BIStatusImage = (statusImage: string): string => {
  return (
    (statusImage === "rouge" ? rouge : null) ||
    (statusImage === "vib" ? vib : null) ||
    (statusImage === "beautyInsider" ? beautyInsider : null)
  );
};
const AccountDetails: React.FC = () => {
  const [accountData, setAccountData] = useState<AccountDatas>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getAccountData = async () => {
      const url =
        "https://6409df426ecd4f9e18bdd647.mockapi.io/customers/6/account";
      try {
        if (loading) {
          const response = await axios.get(url);
          setAccountData(response.data[0]);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAccountData();
  }, []);
  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          {accountData && (
            <div>
              <div className={customStyle.header.header}>
                <div className={customStyle.header.heading}>
                  Account & BI Details
                </div>
                <span className={customStyle.header.link}>
                  <NavLink to="#">View all </NavLink>
                </span>
              </div>
              <SeperationLine />
              <div className={customStyle.customer.customerDetails}>
                <div className={customStyle.customer.customerMainDiv}>
                  <div className={customStyle.customer.customerDiv}>
                    <div
                      className={`${customStyle.mb_3} ${customStyle.customer.customerDetail}`}
                    >
                      <div className={customStyle.customer.heading}>
                        BI Status
                      </div>
                      <div className={customStyle.customer.value}>
                        <img
                          src={BIStatusImage(accountData.BIStatus)}
                          alt="BIStatus Logo"
                        ></img>
                      </div>
                    </div>
                    <div
                      className={`${customStyle.mb_2} ${customStyle.customer.customerDetail}`}
                    >
                      <div className={customStyle.customer.heading}>
                        YTD Spend
                      </div>
                      <div className={customStyle.customer.value}>
                        {`${accountData.YTDSpend}.00`}
                      </div>
                    </div>
                    <div
                      className={`${customStyle.mb_2} ${customStyle.customer.customerDetail}`}
                    >
                      <div className={customStyle.customer.heading}>
                        BI Points
                      </div>
                      <div className={customStyle.customer.value}>
                        {` ${accountData.BIPoints} pts`}
                      </div>
                    </div>
                    <div
                      className={`${customStyle.mb_2} ${customStyle.customer.customerDetail}`}
                    >
                      <div className={customStyle.customer.heading}>
                        Birthday
                      </div>
                      <div className={customStyle.customer.value}>
                        {`${accountData.birthMonth}/${accountData.birthDay}/${accountData.birthYear}`}
                      </div>
                    </div>
                    <div
                      className={`${customStyle.mb_2} ${customStyle.customer.customerDetail}`}
                    >
                      <div className={customStyle.customer.heading}>
                        Birthday Gift
                      </div>
                      <div className={customStyle.customer.value}>
                        {accountData.birthdayGift ? "Redeemed" : "Not Redeemed"}
                      </div>
                    </div>
                  </div>
                  <div className={customStyle.basis}>
                    <div
                      className={`${customStyle.mb_2} ${customStyle.customer.customerDetail}`}
                    >
                      <div className={customStyle.customer.heading}>
                        Profile Id
                      </div>
                      <div className={customStyle.customer.value}>
                        <div>{accountData.profileId}</div>
                      </div>
                    </div>
                    <div
                      className={`${customStyle.mb_2} ${customStyle.customer.customerDetail}`}
                    >
                      <div className={customStyle.customer.heading}>CRM ID</div>
                      <div className={customStyle.customer.value}>
                        <div>{accountData.CRMId}</div>
                      </div>
                    </div>
                    <div className={customStyle.customer.customerDetail}>
                      <div className={customStyle.customer.heading}>USA ID</div>
                      <div className={customStyle.customer.value}>
                        <div>{accountData.USAId}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={customStyle.addresses.address}>
                  <div className={customStyle.addresses.addressName}>
                    <div className={customStyle.addresses.addressDetail}>
                      Shipping Address
                    </div>
                    <div className={customStyle.addresses.line1}>
                      <div>
                        {`${accountData.shippingAddress.building} ${accountData.shippingAddress.state}`}
                      </div>
                      <div className={customStyle.addresses.line2}>
                        <div className={customStyle.addresses.innerLine}>
                          <div>{accountData.billingAddress.street}</div>
                          <div>{accountData.billingAddress.city}</div>
                        </div>
                        <div className={customStyle.addresses.innerLine}>
                          <div>{accountData.billingAddress.pinCode}</div>
                          <div>{accountData.billingAddress.country}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={customStyle.addresses.addressName}>
                    <div className={customStyle.addresses.addressDetail}>
                      Billing Address
                    </div>
                    <div className={customStyle.addresses.line1}>
                      <div>
                        {`${accountData.billingAddress.building} ${accountData.billingAddress.state}`}
                      </div>
                      <div className={customStyle.addresses.line2}>
                        <div className={customStyle.addresses.innerLine}>
                          <div>{accountData.billingAddress.street}</div>
                          <div>{accountData.billingAddress.city}</div>
                        </div>
                        <div className={customStyle.addresses.innerLine}>
                          <div>{accountData.billingAddress.pinCode}</div>
                          <div>{accountData.billingAddress.country}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export { AccountDetails, BIStatusImage };
