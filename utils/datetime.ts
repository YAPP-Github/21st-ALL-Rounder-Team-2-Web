export const toYYYYMMDD = (date: Date = new Date()) => {
  return `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}}`;
};
