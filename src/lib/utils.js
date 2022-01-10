// 一桁の数字をゼロ埋めする
const zeroPadding = (number) => ('0' + number).slice(-2);

// 日付のフォーマットを変換する（2021-08-11T00:00+09:00 => 2021/08/11）
export const formatDate = (dateString) => {
  const date = new Date(dateString);

  return [
    date.getFullYear(),
    zeroPadding(date.getMonth() + 1),
    zeroPadding(date.getDate()),
  ].join('/');
};

// 渡されたDateオブジェクトと現在日時を比較してX年Xヶ月のフォーマットで返す
export const expTimes = (date) => {
  const ONE_YEAR = 365;
  const ONE_MONTH = ONE_YEAR / 12;

  const elapsedMilliseconds = new Date(Date.now() - new Date(date).getTime());
  const elapsedDays = Math.floor(elapsedMilliseconds / 1000 / 60 / 60 / 24);

  const elapsedYears = Math.floor(elapsedDays / ONE_YEAR);
  const elapsedMonths = Math.floor(elapsedDays / ONE_MONTH);

  function viewYear() {
    return elapsedYears ? `${elapsedYears}年` : '';
  }
  function viewMonth() {
    const remainedMonth = elapsedMonths - elapsedYears * 12;
    return remainedMonth ? `${remainedMonth}ヶ月` : '';
  }

  return `${viewYear()}${viewMonth()}`;
};

// 記事オブジェクトからカテゴリーIDの配列を抽出する
export const getCategoryIDs = (post) =>
  post.categoryCollection.items.map(({ sys: { id } }) => id);

// categoryIDに一致するcategoryを返す
export const matchCategories = (targetIDs, categories) =>
  categories.filter(({ sys: { id } }) =>
    targetIDs.some((targetID) => targetID === id)
  );

export const getOgpUrl = (title) =>
  `https://og-image.morimorig3.com/${encodeURIComponent(
    title
  )}.png?md=1&fontSize=75px&52741a767a43a18865d31902de14df55`;
