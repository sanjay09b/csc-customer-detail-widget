import React, { useEffect, useState } from "react";
import axios from "axios";
import { rouge, vib, beautyInsider } from "../images/image";
import customeStyle from "../customStyle";
import { AccountDatas } from "../Interface";

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
              <div className={customeStyle.header.header}>
                <div className={customeStyle.header.heading}>
                  Account & BI Details
                </div>
                <span className={customeStyle.header.link}>
                  <a href="#">View all</a>
                </span>
              </div>
              <div className={customeStyle.division.divisionDiv}>
                <div className={customeStyle.division.division}></div>
              </div>
              <div className={customeStyle.customer.customerDetails}>
                <div className={customeStyle.customer.customerMainDiv}>
                  <div className={customeStyle.customer.customerDiv}>
                    <div
                      className={`${customeStyle.mb_3} ${customeStyle.customer.customerDetail}`}
                    >
                      <div className={customeStyle.customer.heading}>
                        BI Status
                      </div>
                      <div className={customeStyle.customer.value}>
                        <img
                          src={BIStatusImage(accountData.BIStatus)}
                          alt="BIStatus Logo"
                        ></img>
                      </div>
                    </div>
                    <div
                      className={`${customeStyle.mb_2} ${customeStyle.customer.customerDetail}`}
                    >
                      <div className={customeStyle.customer.heading}>
                        YTD Spend
                      </div>
                      <div className={customeStyle.customer.value}>
                        {`${accountData.YTDSpend}.00`}
                      </div>
                    </div>
                    <div
                      className={`${customeStyle.mb_2} ${customeStyle.customer.customerDetail}`}
                    >
                      <div className={customeStyle.customer.heading}>
                        BI Points
                      </div>
                      <div className={customeStyle.customer.value}>
                        {` ${accountData.BIPoints} pts`}
                      </div>
                    </div>
                    <div
                      className={`${customeStyle.mb_2} ${customeStyle.customer.customerDetail}`}
                    >
                      <div className={customeStyle.customer.heading}>
                        Birthday
                      </div>
                      <div className={customeStyle.customer.value}>
                        {`${accountData.birthMonth}/${accountData.birthDay}/${accountData.birthYear}`}
                      </div>
                    </div>
                    <div
                      className={`${customeStyle.mb_2} ${customeStyle.customer.customerDetail}`}
                    >
                      <div className={customeStyle.customer.heading}>
                        Birthday Gift
                      </div>
                      <div className={customeStyle.customer.value}>
                        {accountData.birthdayGift ? "Redeemed" : "Not Redeemed"}
                      </div>
                    </div>
                  </div>
                  <div className={customeStyle.basis}>
                    <div
                      className={`${customeStyle.mb_2} ${customeStyle.customer.customerDetail}`}
                    >
                      <div className={customeStyle.customer.heading}>
                        Profile Id
                      </div>
                      <div className={customeStyle.customer.value}>
                        <div>{accountData.profileId}</div>
                      </div>
                    </div>
                    <div
                      className={`${customeStyle.mb_2} ${customeStyle.customer.customerDetail}`}
                    >
                      <div className={customeStyle.customer.heading}>
                        CRM ID
                      </div>
                      <div className={customeStyle.customer.value}>
                        <div>{accountData.CRMId}</div>
                      </div>
                    </div>
                    <div className={customeStyle.customer.customerDetail}>
                      <div className={customeStyle.customer.heading}>
                        USA ID
                      </div>
                      <div className={customeStyle.customer.value}>
                        <div>{accountData.USAId}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={customeStyle.addresses.address}>
                  <div className={customeStyle.addresses.addressName}>
                    <div className={customeStyle.addresses.addressDetail}>
                      Shipping Address
                    </div>
                    <div className={customeStyle.addresses.line1}>
                      <div>
                        {`${accountData.shippingAddress.building} ${accountData.shippingAddress.state}`}
                      </div>
                      <div className={customeStyle.addresses.line2}>
                        <div className={customeStyle.addresses.innerLine}>
                          <div>{accountData.billingAddress.street}</div>
                          <div>{accountData.billingAddress.city}</div>
                        </div>
                        <div className={customeStyle.addresses.innerLine}>
                          <div>{accountData.billingAddress.pinCode}</div>
                          <div>{accountData.billingAddress.country}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={customeStyle.addresses.addressName}>
                    <div className={customeStyle.addresses.addressDetail}>
                      Billing Address
                    </div>
                    <div className={customeStyle.addresses.line1}>
                      <div>
                        {`${accountData.billingAddress.building} ${accountData.billingAddress.state}`}
                      </div>
                      <div className={customeStyle.addresses.line2}>
                        <div className={customeStyle.addresses.innerLine}>
                          <div>{accountData.billingAddress.street}</div>
                          <div>{accountData.billingAddress.city}</div>
                        </div>
                        <div className={customeStyle.addresses.innerLine}>
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
