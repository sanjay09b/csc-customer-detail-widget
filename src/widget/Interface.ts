type WidgetProps = {
  title?: string;
  paragraph?: string;
};

type CustomerProps = {
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
  OrderDetails,
  OrderedProductImage,
  TransactionDetails,
};
