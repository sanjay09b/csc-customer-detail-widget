const CustomStyles = {
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
  exportWrapper: "tw-mx-6 tw-mt-6",
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
    horizontalBold: "tw-my-4 tw-h-1 tw-bg-black",
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
};

export default CustomStyles;
