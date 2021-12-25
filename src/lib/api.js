const DEVELOP_GRAPHQL_FIELDS = `
title
url
date
summary
stacks
sys {
  id
}
`;
const BLOGPOST_GRAPHQL_FIELDS = `
sys {
  id
}
title
slug
publishDate
content
categoryCollection {
  items {
    sys {
      id
    }
  }
}
`;
const CATEGORY_GRAPHQL_FIELDS = `
sys {
  id
}
name
slug
linkedFrom {
  entryCollection {
    total
  }
}
`;

// 一桁の数字をゼロ埋めする
const zeroPadding = (number) => ('0' + number).slice(-2);

// 日付のフォーマットを変換する（2021-08-11T00:00+09:00 => 2021-08-11）
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${zeroPadding(
    date.getMonth() + 1
  )}-${zeroPadding(date.getDate())}`;
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

// GraphQLのレスポンスから抽出
// developPostCollectionのitemsを抽出する
function extractDevelop(fetchResponse) {
  return fetchResponse?.data?.developPostCollection?.items;
}
// blogPostCollectionのitemsから一つだけ抽出する
function extractBlogPost(fetchResponse) {
  return fetchResponse?.data?.blogPostCollection?.items?.[0];
}
// blogPostCollectionのitemsを抽出する
function extractBlogPostEntries(fetchResponse) {
  return fetchResponse?.data?.blogPostCollection?.items;
}
// categoryCollectionのitemsから一つだけ抽出する
function extractCategory(fetchResponse) {
  return fetchResponse?.data?.categoryCollection?.items?.[0];
}
// categoryCollectionのitemsを抽出する
function extractCategories(fetchResponse) {
  return fetchResponse?.data?.categoryCollection?.items;
}
// category別に返されたBlogPostのitemsを抽出する
function extractBlogPostByCategoryEntries(fetchResponse) {
  return fetchResponse?.data?.categoryCollection?.items?.[0]?.linkedFrom
    ?.entryCollection?.items;
}
// categoryIDに一致するcategoryを返す
export function extractMatchCategory(categoryID, categories) {
  return categories.find((data) => data.sys.id === categoryID);
}

export const fetchGraphQL = async (query, preview = false) =>
  fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENT_PREVIEW_API_KEY
            : process.env.CONTENT_DELIVERY_API_KEY
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());

//
export const getDataForHome = async (preview) => {
  const develop = await fetchGraphQL(
    `query {
      developPostCollection(order:date_DESC, preview: ${
        preview ? 'true' : 'false'
      }) {
        items {
          ${DEVELOP_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  const categories = await fetchGraphQL(
    `query {
      categoryCollection(preview: ${preview ? 'true' : 'false'}) {
        items {
          ${CATEGORY_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(order:publishDate_DESC, preview: ${
        preview ? 'true' : 'false'
      }) {
        items {
          ${BLOGPOST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return {
    develop: extractDevelop(develop),
    blogPost: extractBlogPostEntries(entries),
    category: extractCategories(categories),
  };
};

// Blog記事のslug取得
export const getBlogPostSlug = async (preview) => {
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(order:publishDate_DESC, preview: ${
        preview ? 'true' : 'false'
      }) {
        items {
          slug
        }
      }
    }`,
    preview
  );

  return extractBlogPostEntries(entries);
};
// Categoryページのslug取得
export const getBlogCategorySlug = async (preview) => {
  const entries = await fetchGraphQL(
    `query {
      categoryCollection(preview: ${preview ? 'true' : 'false'}) {
        items {
          slug
        }
      }
    }`,
    preview
  );

  return extractCategories(entries);
};

export const getBlogPostBySlug = async (slug, preview) => {
  const entry = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug: "${slug}" }, preview: ${
      preview ? 'true' : 'false'
    }, limit: 1) {
        items {
          ${BLOGPOST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  const categories = await fetchGraphQL(
    `query {
      categoryCollection(preview: ${preview ? 'true' : 'false'}) {
        items {
          ${CATEGORY_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return {
    post: extractBlogPost(entry),
    categories: extractCategories(categories),
  };
};

export const getBlogPostByCategory = async (slug, preview) => {
  const entries = await fetchGraphQL(
    `query {
      categoryCollection(where:{slug:"${slug}"}, preview: ${
      preview ? 'true' : 'false'
    }) {
        items {
          linkedFrom {
            entryCollection{
              items {
                ... on BlogPost{
                  slug
                  title
                  publishDate
                  sys {
                    id
                  }
                }
              }
            }
          }
        }
      }
    }`,
    preview
  );

  const categories = await fetchGraphQL(
    `query {
      categoryCollection(where:{slug:"${slug}"}, preview: ${
      preview ? 'true' : 'false'
    }) {
        items {
          ${CATEGORY_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return {
    posts: extractBlogPostByCategoryEntries(entries),
    category: extractCategory(categories),
  };
};
