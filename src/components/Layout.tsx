import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <>
      <Navbar />
      <div className='m-4'>
        <Outlet />
      </div>
    </>
  ) : (
    <Outlet />
  );
};

export default Layout;
