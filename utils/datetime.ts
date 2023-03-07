export const toYYYYMMDD = (date: Date = new Date()) => {
  return `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
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
