const CustomStyles = {
  notesTable: {
    wrapper: "overflow-auto",
    tableHeader: {
      headerStyle:
        "text-left text-base align-text-top border-b-2 border-customGrey whitespace-nowrap",
      generalCellWrapper: "pr-6 pb-4",
      generalWrapper: "flex",
      imgDropdown: "w-3 h-3 self-center ml-3",
      csridCellWrapper: "w-32 pr-6 pb-4",
      imgSearchLens: "w-4 h-4 self-center mr-2",
      typeWrapper: "w-20 pr-6 pb-4 text-center",
      contactCellWrapper: "pr-9 pb-4 flex",
      imgInfo: "pl-2 self-center",
      description: {
        cellWrapper: "pb-4",
        descriptionWrap: "self-center basis-1/2 pr-3",
        searchNoteWrap: "flex basis-1/2 justify-end ml-5",
        generalWrap: "self-center",
      },
    },
    bodyStyle: {
      rowStyle: "text-left align-text-top text-sm font-normal border-b-2",
      generalCellWrap: "pr-6 py-4",
      orderidWrap: "underline pr-6 py-4 text-customBlue",
    },
  },
  customerHeader: {
    name: "font-bold text-2xl self-center",
    nameStatusWrapper: "flex basis-1/2",
    sephoraRedirect: "text-customBlue font-normal text-sm self-center",
    sephoraRedirectWrapper: "flex self-center",
    redirectPositionWrapper: "flex basis-1/2 justify-end",
    alignRow: "flex",
    centerAlign: "self-center",
    alignRowWithSpace: "flex space-x-2 font-normal text-sm items-stretch",
  },
  exportWrapper: "mx-6 mt-6",
  statusButtons: {
    active:
      "bg-success rounded text-white font-bold text-xs ml-2 px-2 py-px self-center",
    banned:
      "bg-banned rounded text-white font-bold text-xs ml-2 px-2 py-px self-center",
    deactivated:
      "bg-inactive rounded text-inactiveTextColor font-bold text-xs ml-2 px-2 py-px self-center",
    fraud:
      "bg-fraud rounded text-white font-bold text-xs ml-2 px-2 py-px self-center",
    suspended:
      "bg-suspended rounded text-white font-bold text-xs ml-2 px-2 py-px self-center",
  },
  notesTypeButtons: {
    profile: "bg-profileBg rounded font-bold text-xs px-2 py-px self-center",
    system: "bg-systemBg rounded font-bold text-xs px-2 py-px self-center",
    order: "bg-orderBg rounded font-bold text-xs px-2 py-px self-center",
  },
  separationLine: {
    horizontalLite: "h my-3 bg-customGrey",
    horizontalBold: "my-4 h-1 bg-black",
    vertical: "h-4 w-0.5 bg-gray-400 self-center",
  },
  addNoteButton:
    "rounded-full text-sm text-white bg-black py-2 font-bold px-6 py-3",
  redirectButton: {
    buttonWrapper: "flex pl-3 m-0",
    imgOne: "relative",
    imgTwo: "relative right-3",
  },
  searchBar: {
    wrapper: "flex self-center mr-5 bg-inactive rounded-full",
    image: "w-4 h-4 self-center ml-3",
    input: "focus:outline-0 bg-transparent text-sm font-normal p-2",
  },
};

export default CustomStyles;
