const customStyle = {
  header: {
    header: "tw-flex tw-flex-row tw-space-x-2 tw-mt-4 tw-mb-4",
    heading: " tw-font-bold tw-text-xl tw-leading-5",
    link: "tw-font-normal tw-text-sm tw-leading-4 tw-text-link tw-self-center",
  },
  division: {
    divisionDiv: "tw-mb-4",
    division: "tw-border-lightGray tw-border-b-2 ",
    seperator: "tw-border-gray5 tw-border-b-2",
  },
  customer: {
    customerDetails: "tw-flex tw-space-x-6 tw-mt-4",
    customerMainDiv:
      "tw-flex tw-lg:tw-flex-row tw-md:tw-flex-row tw-flex-col tw-lg:tw-basis-1/2 tw-md:tw-basis-2/3 tw-basis-1/2 tw-lg:tw-space-x-6 tw-md:tw-space-x-6 ",
    customerDiv: "tw-basis-1/2",
    customerDetail:
      "tw-flex tw-flex-row tw-lg:tw-space-x-6 tw-md:tw-space-x-6 tw-space-x-2",
    heading:
      "tw-lg:tw-basis-1/2 tw-md:tw-basis-1/2 tw-basis-1/3 tw-text-left tw-text-sm tw-leading-4",
    value:
      "tw-lg:tw-basis-1/2 tw-md:tw-basis-1/2 tw-basis-2/3 tw-text-left tw-leading-4 tw-text-sm",
  },
  addresses: {
    address:
      "tw-flex tw-lg:tw-flex-row tw-lg:tw-basis-1/2 tw-lg:tw-space-x-6 tw-md:tw-basis-1/3 tw-md:tw-flex-col tw-md:tw-space-y-6 tw-flex-col tw-space-y-6 tw-lg:tw-space-y-0",
    addressName: "tw-lg:tw-basis-1/2 tw-md:tw-basis-1/2 tw-basis-1/6",
    addressDetail: "tw-text-left tw-text-sm tw-leading-4 tw-mb-2",
    line1: "tw-text-left tw-leading-4 tw-text-sm",
    line2:
      "tw-flex tw-flex-col tw-md:tw-space-x-0.5 tw-lg:tw-space-x-0.5 tw-md:tw-flex-row tw-lg:tw-flex-row",
    innerLine: "tw-flex tw-flex-row tw-md:tw-space-x-0.5 tw-lg:tw-space-x-0.5",
  },
  mb_3: "tw-mb-3",
  mb_2: "tw-mb-2",
  my_2: "tw-my-2",
  basis: "tw-basis-1/2 ",
  mr_6: "tw-mr-6",
  notesHeader: "tw-flex tw-flex-row tw-items-center tw-mb-2",
  notes: "tw-text-xl tw-basis-14 tw-mr-2 tw-font-bold tw-leading-5",
  viewAll:
    "tw-text-sm tw-mr-2 tw-grow tw-basis-8/12 tw-font-normal tw-text-link tw-leading-4",
  addNote: "tw-text-sm tw-mr-2 tw-font-normal tw-text-link tw-leading-4",
  noteHeader:
    "tw-flex tw-flex-row tw-items-center tw-mb-2 tw-w-1/2 tw-lg:tw-w-3/5 ",
  contact:
    "tw-bg-gray-4 tw-rounded tw-font-bold tw-text-xs tw-px-1.5 tw-self-center tw-mr-2 tw-leading-4 ",
  viewOrder: "tw-text-link tw-text-sm tw-leading-4 tw-w-2/5 tw-mb-2",
  by: "tw-mr-2 tw-text-sm tw-leading-4 tw-font-normal",
  date: "tw-mr-2 tw-text-sm tw-leading-4 tw-font-normal",
  description: "tw-text-sm tw-leading-4 tw-font-normal",
  customerId: "tw-text-sm tw-leading-4 tw-font-normal",
  note: "tw-flex tw-flex-col",
  notesContainer: "tw-mt-2.5",
  notesMainHeader: "tw-flex tw-flex-col",
  composeNotes: "tw-flex tw-justify-end tw-items-center",
  editImageContainer: "tw-flex",
  editImage: "tw-w-5 tw-h-5",
  seperator: "tw-h-px tw-bg-gray-5 tw-mb-2 tw-mt-2",
  notesSummary: "tw-flex tw-flex-col",
  loading: "tw-text-sm tw-font-normal tw-leading-4",
  notesTable: {
    wrapper: "tw-overflow-auto",
    tableHeader: {
      headerStyle:
        "tw-text-left tw-text-base tw-align-text-top tw-border-b-2 tw-border-customGrey tw-whitespace-nowrap",
      generalCellWrapper: "tw-pr-6 tw-pb-4",
      generalWrapper: "tw-flex",
      imgDropdown: "tw-w-3 tw-h-3 tw-self-center tw-ml-3",
      csridCellWrapper: "tw-w-32 tw-pr-6 tw-pb-4",
      imgSearchLens: "tw-w-4 tw-h-4 tw-self-center tw-mr-2",
      typeWrapper: "tw-w-20 tw-pr-6 tw-pb-4 tw-text-center",
      contactCellWrapper: "tw-pr-9 tw-pb-4 tw-flex",
      imgInfo: "tw-pl-2 tw-self-center",
      description: {
        cellWrapper: "tw-pb-4",
        descriptionWrap: "tw-self-center tw-basis-1/2 tw-pr-3",
        searchNoteWrap: "tw-flex tw-basis-1/2 tw-justify-end tw-ml-5",
        generalWrap: "tw-self-center",
      },
    },
    bodyStyle: {
      rowStyle:
        "tw-text-left tw-align-text-top tw-text-sm tw-font-normal tw-border-b-2",
      generalCellWrap: "tw-pr-6 tw-py-4",
      orderidWrap: "tw-underline tw-pr-6 tw-py-4 tw-text-customBlue",
    },
  },
  customerHeader: {
    name: "tw-font-bold tw-text-2xl tw-self-center",
    nameStatusWrapper: "tw-flex tw-basis-1/2",
    sephoraRedirect:
      "tw-text-customBlue tw-font-normal tw-text-sm tw-self-center",
    sephoraRedirectWrapper: "tw-flex tw-self-center",
    redirectPositionWrapper: "tw-flex tw-basis-1/2 tw-justify-end",
    alignRow: "tw-flex",
    centerAlign: "tw-self-center",
    alignRowWithSpace:
      "tw-flex tw-space-x-2 tw-font-normal tw-text-sm tw-items-stretch",
  },
  exportWrapper: "tw-mx-6 tw-mt-4",
  statusButtons: {
    active:
      "tw-bg-success tw-rounded tw-text-white tw-font-bold tw-text-xs tw-ml-2 tw-px-2 tw-py-px tw-self-center",
    banned:
      "tw-bg-banned tw-rounded tw-text-white tw-font-bold tw-text-xs tw-ml-2 tw-px-2 tw-py-px tw-self-center",
    deactivated:
      "tw-bg-inactive tw-rounded tw-text-inactiveTextColor tw-font-bold tw-text-xs tw-ml-2 tw-px-2 tw-py-px tw-self-center",
    fraud:
      "tw-bg-fraud tw-rounded tw-text-white tw-font-bold tw-text-xs tw-ml-2 tw-px-2 tw-py-px tw-self-center",
    suspended:
      "tw-bg-suspended tw-rounded tw-text-white tw-font-bold tw-text-xs tw-ml-2 tw-px-2 tw-py-px tw-self-center",
  },
  notesTypeButtons: {
    profile:
      "tw-bg-profileBg tw-rounded tw-font-bold tw-text-xs tw-px-2 tw-py-px tw-self-center",
    system:
      "tw-bg-systemBg tw-rounded tw-font-bold tw-text-xs tw-px-2 tw-py-px tw-self-center",
    order:
      "tw-bg-orderBg tw-rounded tw-font-bold tw-text-xs tw-px-2 tw-py-px tw-self-center",
  },
  separationLine: {
    horizontalLite: "tw-h tw-my-3 tw-bg-customGrey",
    horizontalBold: "tw-my-2 tw-h-1 tw-bg-black",
    vertical: "tw-h-4 tw-w-0.5 tw-bg-gray-400 tw-self-center",
  },
  addNoteButton:
    "tw-rounded-full tw-text-sm tw-text-white tw-bg-black tw-py-2 tw-font-bold tw-px-6 tw-py-3",
  redirectButton: {
    buttonWrapper: "tw-flex tw-pl-3 tw-m-0",
    imgOne: "tw-relative",
    imgTwo: "tw-relative tw-right-3",
  },
  searchBar: {
    wrapper: "tw-flex tw-self-center tw-mr-5 tw-bg-inactive tw-rounded-full",
    image: "tw-w-4 tw-h-4 tw-self-center tw-ml-3",
    input:
      "tw-focus:outline-0 tw-bg-transparent tw-text-sm tw-font-normal tw-p-2",
  },
  notesAndTransaction: "tw-grid tw-lg:tw-grid-cols-2 tw-gap-4 tw-mt-4",
  transactionHistory: "tw-flex tw-flex-col",
  transactionHeader: "tw-flex tw-space-x-2 tw-mb-2",
  transaction: "tw-font-bold tw-text-xl tw-self-center tw-leading-5",
  transactionViewAll: "tw-text-link tw-text-sm tw-self-center",
  orderId: " tw-basis-5/6 tw-text-sm tw-font-bold tw-self-center",
  rightArrow:
    "tw-flex tw-basis-2/6 tw-self-center tw-justify-end tw-h-3  tw-mr-6",
  order: "tw-flex  tw-space-x-2 tw-text-xs tw-font-bold tw-mt-2",
  category: "tw-pr-2 tw-pl-2 tw-rounded-lg tw-bg-customHex",
  status: "tw-bg-black tw-pr-2 tw-pl-2 tw-rounded-lg tw-text-white",
  parcelamount: "tw-flex tw-space-x-6 tw-mt-2 ",
  parcels: "tw-text-sm tw-w-24 tw-h-5 tw-text-customHex1",
  paymentamount: "tw-flex tw-space-x-6 tw-mt-2",
  payment: "tw-text-customHex1 tw-w-24 tw-h-5 tw-text-sm",
  paymentValue: "tw-flex tw-space-x-2 ",
  paymentAmount: "tw-flex tw-space-x-2",
  transactionDate: "tw-flex tw-space-x-6 tw-mt-2",
  dates: "tw-text-customHex1 tw-w-24 tw-h-5 tw-text-sm",
  paymentDate: "tw-text-sm",
  orderDate: "tw-flex tw-space-x-14 tw-mt-2",
  orderedOn: "tw-text-customHex1 tw-text-sm",
  orderon: "tw-text-sm",
  estDelivery: "tw-mt-2",
  EstDelivery: "tw-text-customHex1 tw-text-sm",
  EstDate: "tw-flex tw-space-x-20  ",
  deliveryDate: "tw-text-customHex1 tw-text-sm",
  DeliveryDate: "tw-text-sm tw-pl-3",
};

export default customStyle;
