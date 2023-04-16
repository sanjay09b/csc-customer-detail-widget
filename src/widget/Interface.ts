type WidgetProps = {
  title?: string;
  paragraph?: string;
};

type CustomerProps = {
  customerId?: string;
};
type NoteDefinition = {
  createdAt?: number | null;
  orderId?: number;
  customerId?: String;
  description?: String;
  contact?: String;
  id?: string;
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

type NotesTable = {
  date: number;
  csrId: string;
  type: string;
  orderId: string;
  contact: string;
  description: string;
  notesId: string;
};

type CustomerHeader = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  risk: string;
  activeStatus: string;
  id?: string;
  customerId?: string;
};

type OrderDetails = {
  OrderId: number;
  Category: String;
  Status: ImageData;
  parcels: number;
  payment: number;
  date: Date;
  orderedOn: Date;
};
type OrderedProductImage = {
  images: ImageData;
  src: ImageData;
};
type TransactionDetails = {
  parcels?: number;
  OrderId?: string;
  Category?: string;
  Status?: string;
  paymentType?: string;
  paymentAmount?: number;
  transactionType?: number;
  orderedOn?: number;
  estDeliveryDate?: number;
  orderedProducts?: string[];
  status?: string;
  id?: string;
  customerId?: string;
};

export {
  WidgetProps,
  CustomerProps,
  CustomerHeader,
  NotesTable,
  AccountDatas,
  NoteDefinition,
  OrderDetails,
  OrderedProductImage,
  TransactionDetails,
};
