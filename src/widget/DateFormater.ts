const getTime = (time): string => {
  const dateString = `${new Date(time).getHours()}:
    ${new Date(time).getMinutes()}:
     ${new Date(time).getSeconds()}`;
  return dateString;
};
const getDate = (date): string => {
  const dateString =
    `${new Date(date).getFullYear().toString().trim()}-` +
    `0${(new Date(date).getMonth() + 1).toString().trim()}-` +
    `${new Date(date).getDate().toString().trim()}`;
  console.log(dateString);
  return dateString;
};

export { getDate, getTime };
