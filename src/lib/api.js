import remark from 'remark';
import html from 'remark-html';
import * as contentful from 'contentful';

// 一桁の数字をゼロ埋めする
const zeroPadding = (number) => ('0' + number).slice(-2);

// 日付のフォーマットを変換する（2021-08-11T00:00+09:00 => 2021-08-11）
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${zeroPadding(
    date.getMonth() + 1
  )}-${zeroPadding(date.getDate())}`;
};

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

export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export const getAllPost = async (options = {}) => {
  const client = await contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: process.env.CONTENTFUL_ENVIRONMENT_ID,
    accessToken: process.env.CONTENT_DELIVERY_API_KEY,
  });
  const data = await client
    .getEntries(options)
    .then((res) => res)
    .catch(console.error);

  return data;
};
