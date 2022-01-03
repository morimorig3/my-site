import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const Layout = ({ children }) => (
  <div className="flex flex-col	min-h-screen">
    <Header />
    <main className="flex-1 overflow-x-hidden">{children}</main>
    <Footer />
  </div>
);
