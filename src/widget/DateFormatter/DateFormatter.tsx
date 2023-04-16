import React from "react";

const getDate = (date: any) => {
  const month = new Date(date).toLocaleDateString("en-us", {
    month: "short",
  });
  const dateString = `${month} ${new Date(date).getDate()}, ${new Date(
    date,
  ).getFullYear()}`;
  return <p>{dateString}</p>;
};

export default getDate;
