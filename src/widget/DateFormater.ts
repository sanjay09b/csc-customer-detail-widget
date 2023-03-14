const getTime = (time) => {
  const dateString = `${new Date(time).getHours()}:
      ${new Date(time).getMinutes()}:
       ${new Date(time).getSeconds()}`;
  return dateString;
};
const getDate = (date) => {
  const dateString = `${new Date(date).getFullYear()}-
      ${new Date(date).getMonth() + 1}-
       ${new Date(date).getDate()}`;
  console.log(dateString);
  return dateString;
};

const getDateBeginWithMonth = (date) => {
  if (date !== null) {
    const yearString = `${new Date(date).getFullYear()}`;
    const yearInTwoDigits = yearString.slice(2, 4);

    const dateString =
      `${(new Date(date).getMonth() + 1).toString().trim()}/` +
      `${new Date(date).getDate().toString().trim()}/` +
      `${yearInTwoDigits}`;
    return dateString;
  }
  return "";
};

const getDateWithMonthAndDate = (date) => {
  if (date !== null) {
    // const year = new Date(dateValue).getFullYear().toString().trim();
    const monthAsString = (new Date(date).getMonth() + 1).toString().trim();
    const dateAsString = new Date(date).getDate().toString().trim();
    const dateString = `${
      monthAsString.length < 2 ? "0".concat(monthAsString) : monthAsString
    }/${dateAsString.length < 2 ? "0".concat(dateAsString) : dateAsString}`;

    return dateString;
  }
  return "";
};

export { getDate, getTime, getDateBeginWithMonth, getDateWithMonthAndDate };
