import axios from "axios";
import React, { useEffect, useState } from "react";
import AddNoteButton from "../Buttons/AddNoteButton";
import SearchBar from "../SearchBar/SearchBar";
import SearchLens from "../images/search_lens.svg";
// import NoteType from "../Utility/Notetype";
import info from "../images/Info.svg";
import dropDown from "../images/dropdown.svg";
import { NotesTable } from "../Interface";
import OrderButton from "../NotesTypeButtons/OrderButton";
import SystemButton from "../NotesTypeButtons/SystemButton";
import ProfileButton from "../NotesTypeButtons/ProfileButton";
import CustomStyles from "../CustomStyles";

const noteType = (type): JSX.Element | null => {
  switch (type) {
    case "Order":
      return <OrderButton data-testid="order" />;
    case "System":
      return <SystemButton data-testid="system" />;
    case "Profile":
      return <ProfileButton data-testid="profile" />;
    default:
      return <div>Unknown Error</div>;
  }
};

const ExpandedNotes = (): JSX.Element => {
  const [notesData, setNotesData] = useState<NotesTable[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getNotesData() {
      const url =
        "https://6409df426ecd4f9e18bdd647.mockapi.io/api/v1/notesData";
      try {
        if (loading) {
          const response = await axios.get(url);
          setNotesData([...response.data]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getNotesData();
  }, []);
  console.log(CustomStyles.notesTable.tableHeader.csridCellWrapper);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={CustomStyles.notesTable.wrapper}>
          <table>
            <thead>
              <tr className={CustomStyles.notesTable.tableHeader.headerStyle}>
                <th
                  className={
                    CustomStyles.notesTable.tableHeader.generalCellWrapper
                  }
                >
                  <div
                    className={
                      CustomStyles.notesTable.tableHeader.generalWrapper
                    }
                  >
                    Date
                    <button>
                      <img
                        className={
                          CustomStyles.notesTable.tableHeader.imgDropdown
                        }
                        src={dropDown}
                      ></img>
                    </button>
                  </div>
                </th>
                <th
                  className={
                    CustomStyles.notesTable.tableHeader.csridCellWrapper
                  }
                >
                  <div
                    className={
                      CustomStyles.notesTable.tableHeader.generalWrapper
                    }
                  >
                    <img
                      className={
                        CustomStyles.notesTable.tableHeader.imgSearchLens
                      }
                      src={SearchLens}
                    ></img>
                    CSR ID
                  </div>
                </th>
                <th className={CustomStyles.notesTable.tableHeader.typeWrapper}>
                  <div
                    className={
                      CustomStyles.notesTable.tableHeader.generalWrapper
                    }
                  >
                    Type
                    <button>
                      <img
                        className={
                          CustomStyles.notesTable.tableHeader.imgDropdown
                        }
                        src={dropDown}
                      ></img>
                    </button>
                  </div>
                </th>
                <th
                  className={
                    CustomStyles.notesTable.tableHeader.generalCellWrapper
                  }
                >
                  Order ID
                </th>
                <th
                  className={
                    CustomStyles.notesTable.tableHeader.contactCellWrapper
                  }
                >
                  <div
                    className={
                      CustomStyles.notesTable.tableHeader.generalWrapper
                    }
                  >
                    Contact
                    <img
                      className={CustomStyles.notesTable.tableHeader.imgInfo}
                      src={info}
                    ></img>
                  </div>
                </th>
                <th
                  className={
                    CustomStyles.notesTable.tableHeader.description.cellWrapper
                  }
                >
                  <div
                    className={
                      CustomStyles.notesTable.tableHeader.generalWrapper
                    }
                  >
                    <div
                      className={
                        CustomStyles.notesTable.tableHeader.description
                          .descriptionWrap
                      }
                    >
                      Description
                    </div>
                    <div
                      className={
                        CustomStyles.notesTable.tableHeader.description
                          .searchNoteWrap
                      }
                    >
                      <div
                        className={
                          CustomStyles.notesTable.tableHeader.description
                            .generalWrap
                        }
                      >
                        <SearchBar />
                      </div>
                      <div
                        className={
                          CustomStyles.notesTable.tableHeader.description
                            .generalWrap
                        }
                      >
                        <AddNoteButton />
                      </div>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {notesData.map((data: NotesTable) => {
                return (
                  <>
                    <tr
                      key={data.notesId}
                      className={CustomStyles.notesTable.bodyStyle.rowStyle}
                    >
                      <td
                        className={CustomStyles.notesTable.bodyStyle.rowStyle}
                      >
                        {data.date}
                      </td>
                      <td
                        className={
                          CustomStyles.notesTable.bodyStyle.generalCellWrap
                        }
                      >
                        {data.csrId}
                      </td>
                      <td
                        className={
                          CustomStyles.notesTable.bodyStyle.generalCellWrap
                        }
                      >
                        {noteType(data.type)}
                      </td>
                      <td
                        className={
                          CustomStyles.notesTable.bodyStyle.orderidWrap
                        }
                      >
                        {data.orderId}
                      </td>
                      <td
                        className={
                          CustomStyles.notesTable.bodyStyle.generalCellWrap
                        }
                      >
                        {data.contact}
                      </td>
                      <td
                        className={
                          CustomStyles.notesTable.bodyStyle.generalCellWrap
                        }
                      >
                        {data.description}
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export { ExpandedNotes, noteType };
