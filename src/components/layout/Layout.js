import Header from 'components/layout/Header';
import Navi from 'components/navi';

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <main className="pb-32">{children}</main>
      <Navi />
    </div>
  );
};

export default Layout;
