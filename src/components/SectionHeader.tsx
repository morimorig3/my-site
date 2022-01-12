import { VFC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const SectionHeader: VFC<Props> = ({ children }) => (
  <header className="mb-8">
    <h2 className="text-center font-bold text-lg text-slate-800">{children}</h2>
  </header>
);
