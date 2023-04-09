type WidgetProps = {
  title?: string;
  paragraph?: string;
};

type CustomerProps = {
  customerId?: string;
};

type AccountDatas = {
  BIStatus?: string;
  YTDSpend?: number;
  BIPoints?: number;
  birthDay?: number;
  birthMonth?: number;
  birthYear?: number;
  birthdayGift?: boolean;
  profileId?: number;
  CRMId?: string;
  USAId?: number;
  shippingAddress?: {
    building?: string;
    street?: string;
    state?: string;
    city?: string;
    pinCode?: number;
    country?: string;
  };
  billingAddress?: {
    building?: string;
    street?: string;
    state?: string;
    city?: string;
    pinCode?: number;
    country?: string;
  };
};
export { WidgetProps, CustomerProps, AccountDatas };
