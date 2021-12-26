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
// categoryCollectionのitemsを抽出する
function extractCategories(fetchResponse) {
  return fetchResponse?.data?.categoryCollection?.items;
}
// category別に返されたBlogPostのitemsを抽出する
function extractBlogPostByCategoryEntries(fetchResponse) {
  return fetchResponse?.data?.categoryCollection?.items?.[0]?.linkedFrom
    ?.entryCollection?.items;
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

// ホーム画面のデータ取得
export const getDataForHome = async (preview) => {
  const developments = await fetchGraphQL(
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
    developments: extractDevelop(developments),
    posts: extractBlogPostEntries(entries),
    allCategories: extractCategories(categories),
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
  const categories = await fetchGraphQL(
    `query {
      categoryCollection(preview: ${preview ? 'true' : 'false'}) {
        items {
          slug
        }
      }
    }`,
    preview
  );

  return extractCategories(categories);
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
    allCategories: extractCategories(categories),
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
    }, limit: 1) {
        items {
          ${CATEGORY_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return {
    posts: extractBlogPostByCategoryEntries(entries),
    categories: extractCategories(categories),
  };
};
