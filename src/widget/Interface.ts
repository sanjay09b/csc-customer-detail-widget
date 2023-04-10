type WidgetProps = {
  title?: string;
  paragraph?: string;
};

type CustomerProps = {
  customerId?: string;
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

export { WidgetProps, CustomerProps, CustomerHeader, NotesTable };
