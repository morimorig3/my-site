const toDoubleDigit = (number) => ('0' + number).slice(-2);

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${toDoubleDigit(
    date.getMonth() + 1
  )}-${toDoubleDigit(date.getDate())}`;
};
