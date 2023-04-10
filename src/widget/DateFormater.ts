const getTime = (time: any) => {
  const dateString = `${new Date(time).getHours()}:
      ${new Date(time).getMinutes()}`;
  return dateString;
};
const getDate = (date: any) => {
  const dateString = `${new Date(date).getFullYear()}-
      ${new Date(date).getMonth() + 1}-
       ${new Date(date).getDate()}`;
  return dateString;
};

const getDateByMonth = (date: any) => {
  const month = new Date(date).toLocaleDateString("en-us", {
    month: "short",
  });
  const dateString = `${month} ${new Date(date).getDate()}, ${new Date(
    date,
  ).getFullYear()}`;
  return dateString;
};

const getExpiredDate = (date: any) => {
  const dateMon = new Date(date).toLocaleDateString("en-us", {
    month: "short",
  });
  const dateString = `${dateMon} ${new Date(date).getFullYear()}`;
  return dateString;
};
export { getDate, getTime, getDateByMonth, getExpiredDate };
