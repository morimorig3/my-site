import { VFC } from 'react';
import 'zenn-content-css';

type Props = {
  html: string;
};

export const MarkdownBody: VFC<Props> = ({ html }) => (
  <div className="znc" dangerouslySetInnerHTML={{ __html: html }}></div>
);
