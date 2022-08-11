import type { VFC, ReactNode } from 'react';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => (
  <div className="flex flex-col	min-h-screen">
    <Header />
    <main className="flex-1 overflow-x-hidden">{children}</main>
    <Footer />
  </div>
);
