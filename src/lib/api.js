// 一桁の数字をゼロ埋めする
const toDoubleDigit = (number) => ('0' + number).slice(-2);

// 日付のフォーマットを変換する（2021-08-11T00:00+09:00 => 2021-08-11）
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${toDoubleDigit(
    date.getMonth() + 1
  )}-${toDoubleDigit(date.getDate())}`;
};

// ContentfulからgetEntries()したデータをContentTypeでフィルタリングする
export const extractContentType = (data, contentType) =>
  data.filter((data) => data.sys.contentType.sys.id === contentType);

// Contentfulから取得したデータを日付でソートする
export const sortByDate = (data, orderBy) => {
  if (orderBy === 'DESC') {
    data.sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date));
  } else {
    data.sort((a, b) => new Date(a.fields.date) - new Date(b.fields.date));
  }
  return data;
};
