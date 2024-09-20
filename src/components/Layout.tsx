import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const Layout: FC = () => {
  return(
    <>
      <Header />
      <div className="content-wrap">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;