import type { Query, BlogPost } from '../graphql/generated/type';

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

type ResponseQuery = {
  data: Query;
};

// GraphQLのレスポンスから抽出
// developPostCollectionのitemsを抽出する
function extractDevelop(fetchResponse: ResponseQuery) {
  return fetchResponse?.data?.developPostCollection?.items;
}
// aboutollectionのitemsを抽出する
function extractAbout(fetchResponse: ResponseQuery) {
  return fetchResponse?.data?.aboutCollection?.items;
}
// privacyollectionのitemsを抽出する
function extractPrivacy(fetchResponse: ResponseQuery) {
  return fetchResponse?.data?.privacyCollection?.items;
}
// blogPostCollectionのitemsから一つだけ抽出する
function extractBlogPost(fetchResponse: ResponseQuery) {
  return fetchResponse?.data?.blogPostCollection?.items?.[0];
}
// blogPostCollectionのitemsを抽出する
function extractBlogPosts(fetchResponse: ResponseQuery) {
  return fetchResponse?.data?.blogPostCollection?.items;
}
// categoryCollectionのitemsを抽出する
function extractCategories(fetchResponse: ResponseQuery) {
  return fetchResponse?.data?.categoryCollection?.items;
}
// category別に返されたBlogPostのitemsを抽出する
function extractBlogPostByCategoryEntries(
  fetchResponse: ResponseQuery
): BlogPost[] {
  return fetchResponse?.data?.categoryCollection?.items?.[0]?.linkedFrom
    ?.entryCollection?.items;
}

function fetchGraphQL(query: string, preview = false): Promise<ResponseQuery> {
  return fetch(
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
}

// 全ての開発アイテムを返す
export const getDevlopments = async (preview = false) => {
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

  return extractDevelop(developments);
};

// 全てのアバウトアイテムを返す
export const getAbout = async (preview = false) => {
  const about = await fetchGraphQL(
    `query {
      aboutCollection(order:sys_firstPublishedAt_ASC, preview: ${
        preview ? 'true' : 'false'
      }) {
        items {
          title
          content
        }
      }
    }`
  );

  return extractAbout(about);
};
// 全てのプライバシーアイテムを返す
export const getPrivacy = async (preview = false) => {
  const privacy = await fetchGraphQL(
    `query {
      privacyCollection(order:sys_firstPublishedAt_ASC, preview: ${
        preview ? 'true' : 'false'
      }) {
        items {
          title
          content
        }
      }
    }`
  );

  return extractPrivacy(privacy);
};

// 全てのカテゴリーアイテムを返す
export const getCategories = async (preview = false) => {
  const categories = await fetchGraphQL(
    `query {
      categoryCollection(preview: ${preview ? 'true' : 'false'}) {
        items {
          ${CATEGORY_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractCategories(categories);
};

// 全てのブログポストを返す
export const getBlogPosts = async (preview = false) => {
  const blogPosts = await fetchGraphQL(
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

  return extractBlogPosts(blogPosts);
};

// トップに表示するブログは3件まで
export const getBlogPostsForHome = async (preview = false) => {
  const blogPosts = await fetchGraphQL(
    `query {
      blogPostCollection(order:publishDate_DESC, preview: ${
        preview ? 'true' : 'false'
      }, limit: 3) {
        items {
          ${BLOGPOST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );

  return extractBlogPosts(blogPosts);
};

// カテゴリーのスラッグをキーに記事一覧を取得
export const getBlogPostByCategory = async (slug: string, preview = false) => {
  const BlogPosts = await fetchGraphQL(
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
  return extractBlogPostByCategoryEntries(BlogPosts);
};

// カテゴリーのスラッグをキーにカテゴリーを1件取得
export const getCategory = async (slug: string, preview = false) => {
  const category = await fetchGraphQL(
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
  return extractCategories(category);
};

// slugをキーに記事を1件取得
export const getBlogPostBySlug = async (slug: string, preview = false) => {
  const blogPost = await fetchGraphQL(
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
  return extractBlogPost(blogPost);
};

// Blog記事のslug取得
export const getBlogPostSlug = async (preview = false) => {
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

  return extractBlogPosts(entries);
};

// Categoryページのslug取得
export const getBlogCategorySlug = async (preview = false) => {
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

// ホームページのデータ取得
export const getDataForHome = async (preview = false) => {
  const developments = await getDevlopments(preview);
  const blogPosts = await getBlogPostsForHome(preview);
  const categories = await getCategories(preview);
  return {
    developments,
    blogPosts,
    categories,
  };
};

// ブログ全記事一覧ページのデータ取得
export const getDataForBlogHome = async (preview = false) => {
  const blogPosts = await getBlogPosts(preview);
  const categories = await getCategories(preview);
  return {
    blogPosts,
    categories,
  };
};

// ブログ記事ページのデータ取得
export const getDataForBlogPost = async (slug: string, preview = false) => {
  const blogPost = await getBlogPostBySlug(slug, preview);
  const categories = await getCategories(preview);
  return {
    blogPost,
    categories,
  };
};

// カテゴリーごとの記事一覧ページのデータ取得
export const getDataForCategory = async (slug: string, preview = false) => {
  const blogPosts = await getBlogPostByCategory(slug, preview);
  const category = await getCategory(slug, preview);
  const categories = await getCategories(preview);
  return {
    blogPosts,
    category,
    categories,
  };
};
