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
export const getExperienceYears = (date) => {
  function getYearAndMonth(Date) {
    return {
      year: Date.getFullYear(),
      month: Date.getMonth() + 1,
    };
  }
  const fromData = getYearAndMonth(new Date(date));
  const nowData = getYearAndMonth(new Date());
  const expYear = nowData.year - fromData.year;
  const expMonth = nowData.month - fromData.month;
  return `${expYear ? expYear + '年' : ''}${expMonth ? expMonth + 'ヶ月' : ''}`;
};

// 記事オブジェクトからカテゴリーIDの配列を抽出する
export const getCategoryIDs = (post) =>
  post.categoryCollection.items.map(({ sys: { id } }) => id);

// categoryIDに一致するcategoryを返す
export const matchCategories = (targetIDs, categories) =>
  categories.filter(({ sys: { id } }) =>
    targetIDs.some((targetID) => targetID === id)
  );
