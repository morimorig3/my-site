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
category{
  sys {
    id
  }
}
`;
const CATEGORY_GRAPHQL_FIELDS = `
sys {
  id
}
name
slug
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

function extractDevelop(fetchResponse) {
  return fetchResponse?.data?.developPostCollection?.items;
}
function extractBlogPost(fetchResponse) {
  return fetchResponse?.data?.blogPostCollection?.items?.[0];
}
function extractBlogPostEntries(fetchResponse) {
  return fetchResponse?.data?.blogPostCollection?.items;
}
function extractCategory(fetchResponse) {
  return fetchResponse?.data?.categoryCollection?.items;
}
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

export const getDataForHome = async (preview) => {
  const entries = await fetchGraphQL(
    `query {
      developPostCollection(order:date_DESC, preview: ${
        preview ? 'true' : 'false'
      }) {
        items {
          ${DEVELOP_GRAPHQL_FIELDS}
        }
      }
      blogPostCollection(order:publishDate_DESC, preview: ${
        preview ? 'true' : 'false'
      }) {
        items {
          ${BLOGPOST_GRAPHQL_FIELDS}
        }
      }
      categoryCollection(preview: ${preview ? 'true' : 'false'}) {
        items {
          ${CATEGORY_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );

  return {
    develop: extractDevelop(entries),
    blogPost: extractBlogPostEntries(entries),
    category: extractCategory(entries),
  };
};
export const getBlogPostSlug = async (preview) => {
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

  return extractBlogPostEntries(entries);
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
    categories: extractCategory(categories),
  };
};
