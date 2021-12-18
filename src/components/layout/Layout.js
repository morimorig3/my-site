import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

const Layout = ({ children }) => (
  <div className="flex flex-col	min-h-screen">
    <Header />
    <main className="lg:container px-4 sm:px-8 lg:px-0 flex-1 overflow-x-hidden mx-auto">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
