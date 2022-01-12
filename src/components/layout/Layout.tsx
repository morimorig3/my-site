import { VFC, ReactNode } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

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
