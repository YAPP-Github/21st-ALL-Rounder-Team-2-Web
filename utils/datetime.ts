export const toYYYYMMDD = (date: Date = new Date()) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const getDateByYearAndMonth = (year: number, month: number) => {
  const val = new Date();
  val.setFullYear(year);
  val.setMonth(month);
  return val;
};

export const today = () => {
  return new Date();
};

export const parseDate = (date: Date) => {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
};
