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

export { getDate, getTime };
