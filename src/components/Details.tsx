import type { VFC, ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
  isOpen?: boolean;
};

export const Details: VFC<Props> = ({
  title,
  children,
  className = '',
  isOpen = false,
}) => (
  <details className={className} open={isOpen}>
    <summary className="text-slate-800 font-bold">{title}</summary>
    <div className="details-content">{children}</div>
  </details>
);
