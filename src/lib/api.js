const toDoubleDigit = (number) => ('0' + number).slice(-2);

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${toDoubleDigit(
    date.getMonth() + 1
  )}-${toDoubleDigit(date.getDate())}`;
};

export const extractContentType = (data, contentType) =>
  data.filter((data) => data.sys.contentType.sys.id === contentType);

export const sortByDate = (data, orderBy) => {
  if (orderBy === 'DESC') {
    data.sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date));
  } else {
    data.sort((a, b) => new Date(a.fields.date) - new Date(b.fields.date));
  }
  return data;
};
