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

export { WidgetProps, CustomerProps, NoteDefinition };
