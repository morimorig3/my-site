import type { VFC } from 'react';
import 'zenn-content-css';

type Props = {
  html: string;
  className?: string;
};

export const MarkdownBody: VFC<Props> = ({ html, className = '' }) => (
  <div
    className={`znc ${className}`}
    dangerouslySetInnerHTML={{ __html: html }}
  ></div>
);
