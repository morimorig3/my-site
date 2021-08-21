import fs from 'fs';
import remark from 'remark';
import html from 'remark-html';

const markdownToHtml = async (markdown) => {
  const result = await remark().use(html).process(markdown);
  return result.toString();
};

export const getBookPostHtml = async (id) => {
  const markdown = await fs.readFileSync(
    process.cwd() + `/src/data/books/${id}.md`,
    'utf8'
  );
  return markdownToHtml(markdown);
};
