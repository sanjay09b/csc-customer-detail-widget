import axios from "axios";
import { useEffect, useState } from "react";
import AddNoteButton from "../Buttons/AddNoteButton";
import SearchBar from "../SearchBar/SearchBar";
import SearchLens from "../images/search_lens.svg";
import info from "../images/Info.svg";
import dropDown from "../images/dropdown.svg";
import { NotesTable } from "../Interface";
import NoteTypeButton from "../Buttons/NoteTypeButtons";
import customStyle from "../customStyle";

const ExpandedNotes = (): JSX.Element => {
  const [notesData, setNotesData] = useState<NotesTable[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url: string =
      "https://6409df426ecd4f9e18bdd647.mockapi.io/api/v1/notesData";
    async function getNotesData(): Promise<void> {
      try {
        const response = await axios.get(url);
        setNotesData(response.data);
      } catch (error) {
        //  console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getNotesData();
  }, []);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={customStyle.notesTable.wrapper}>
          <table>
            <thead>
              <tr className={customStyle.notesTable.tableHeader.headerStyle}>
                <th
                  className={
                    customStyle.notesTable.tableHeader.generalCellWrapper
                  }
                >
                  <div
                    className={
                      customStyle.notesTable.tableHeader.generalWrapper
                    }
                  >
                    Date
                    <button>
                      <img
                        className={
                          customStyle.notesTable.tableHeader.imgDropdown
                        }
                        src={dropDown}
                      ></img>
                    </button>
                  </div>
                </th>
                <th
                  className={
                    customStyle.notesTable.tableHeader.csridCellWrapper
                  }
                >
                  <div
                    className={
                      customStyle.notesTable.tableHeader.generalWrapper
                    }
                  >
                    <img
                      className={
                        customStyle.notesTable.tableHeader.imgSearchLens
                      }
                      src={SearchLens}
                    ></img>
                    CSR ID
                  </div>
                </th>
                <th className={customStyle.notesTable.tableHeader.typeWrapper}>
                  <div
                    className={
                      customStyle.notesTable.tableHeader.generalWrapper
                    }
                  >
                    Type
                    <button>
                      <img
                        className={
                          customStyle.notesTable.tableHeader.imgDropdown
                        }
                        src={dropDown}
                      ></img>
                    </button>
                  </div>
                </th>
                <th
                  className={
                    customStyle.notesTable.tableHeader.generalCellWrapper
                  }
                >
                  Order ID
                </th>
                <th
                  className={
                    customStyle.notesTable.tableHeader.contactCellWrapper
                  }
                >
                  <div
                    className={
                      customStyle.notesTable.tableHeader.generalWrapper
                    }
                  >
                    Contact
                    <img
                      className={customStyle.notesTable.tableHeader.imgInfo}
                      src={info}
                    ></img>
                  </div>
                </th>
                <th
                  className={
                    customStyle.notesTable.tableHeader.description.cellWrapper
                  }
                >
                  <div
                    className={
                      customStyle.notesTable.tableHeader.generalWrapper
                    }
                  >
                    <div
                      className={
                        customStyle.notesTable.tableHeader.description
                          .descriptionWrap
                      }
                    >
                      Description
                    </div>
                    <div
                      className={
                        customStyle.notesTable.tableHeader.description
                          .searchNoteWrap
                      }
                    >
                      <div
                        className={
                          customStyle.notesTable.tableHeader.description
                            .generalWrap
                        }
                      >
                        <SearchBar />
                      </div>
                      <div
                        className={
                          customStyle.notesTable.tableHeader.description
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
                      className={customStyle.notesTable.bodyStyle.rowStyle}
                    >
                      <td className={customStyle.notesTable.bodyStyle.rowStyle}>
                        {data.date}
                      </td>
                      <td
                        className={
                          customStyle.notesTable.bodyStyle.generalCellWrap
                        }
                      >
                        {data.csrId}
                      </td>
                      <td
                        className={
                          customStyle.notesTable.bodyStyle.generalCellWrap
                        }
                      >
                        <NoteTypeButton noteType={data.type} />
                      </td>
                      <td
                        className={customStyle.notesTable.bodyStyle.orderidWrap}
                      >
                        {data.orderId}
                      </td>
                      <td
                        className={
                          customStyle.notesTable.bodyStyle.generalCellWrap
                        }
                      >
                        {data.contact}
                      </td>
                      <td
                        className={
                          customStyle.notesTable.bodyStyle.generalCellWrap
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

export default ExpandedNotes;
