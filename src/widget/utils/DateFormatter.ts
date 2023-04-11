const getDateBeginWithDay = (date: number | null): string => {
  if (date !== null) {
    const weekDay: string[] = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const newDate = new Date(date);
    const yearString = `${newDate.getFullYear()}`;
    const dayString = `${weekDay[newDate.getDay()]}`.slice(0, 3);
    const dateString =
      `${dayString}` +
      ` ${newDate.getDate().toString().trim()},` +
      ` ${yearString}`;
    return dateString;
  }
  return "";
};

export default getDateBeginWithDay;
