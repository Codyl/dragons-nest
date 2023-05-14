import { useState } from 'react';
import { Link } from 'react-router-dom';
import pages from '../constants/pages';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { FaUserCircle } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { logout } from '../redux/slices/auth-slice';
import { getAvailablePages } from '../helpers/auth';

const UserLinks = ({ close }: { close: () => void }) => {
  const dispatch = useAppDispatch();

  return (
    <div className='hidden lg:block'>
      <Link
        className='text-blue-50 hover:bg-primary block text-base font-bold w-full h-12 sm:h-auto'
        onClick={() => {
          close();
        }}
        to='/profile'
      >
        Profile
      </Link>
      <Link
        className='text-blue-50 hover:bg-primary block text-base font-bold w-full h-12 sm:h-auto'
        onClick={() => {
          close();
        }}
        to='/profile'
      >
        My Family
      </Link>
      <Link
        className='text-blue-50 hover:bg-primary block text-base font-bold w-full h-12 sm:h-auto'
        onClick={() => {
          close();
        }}
        to='/profile'
      >
        Mentoring
      </Link>
      <Link
        className='text-blue-50 hover:bg-primary block text-base font-bold w-full'
        onClick={() => {
          dispatch(logout());
          localStorage.removeItem('user');
          close();
        }}
        to='/'
      >
        Logout
      </Link>
    </div>
  );
};

const Navbar = () => {
  const { isLoggedIn } = useAppSelector((state) => state.authReducer);
  const [open, setOpen] = useState(false);
  const [showUserOptions, setShowUserOptions] = useState(false);
  const close = () => setOpen(false);

  const availablePages = getAvailablePages();
  return (
    <>
      <div className='h-12'></div>
      <div className='fixed w-full top-0 py-2 px-4 bg-primary flex flex-col sm:flex-row sm:justify-between z-50'>
        <div className='flex justify-between items-center bg-primary'>
          <Link to='/' className='text-2xl font-extrabold'>
            Homeschool
          </Link>
          {open ? (
            <GrClose
              as='button'
              onClick={close}
              className='text-xl cursor-pointer sm:hidden'
            />
          ) : (
            <GiHamburgerMenu
              as='button'
              onClick={() => setOpen(true)}
              className='text-xl cursor-pointer sm:hidden'
            />
          )}
        </div>
        {open && (
          <ul className='sm:hidden max-h-screen flex-col gap-x-8 justify-around'>
            {availablePages.map(({ title, path }) => (
              <li className='h-8 sm:h-auto' key={title}>
                <Link
                  className='text-blue-50 hover:bg-primary block text-base font-bold w-full'
                  onClick={close}
                  to={path}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <ul className='hidden sm:flex max-h-screen flex-col sm:flex-row  gap-x-8 justify-around sm:justify-end'>
          {availablePages.map(({ title, path }) => (
            <li className='h-12 sm:h-auto' key={title}>
              <Link
                className='text-blue-50 hover:bg-primary block text-base font-bold w-full'
                onClick={close}
                to={path}
              >
                {title}
              </Link>
            </li>
          ))}
          {isLoggedIn && (
            <>
              <FaUserCircle
                className='hidden lg:block text-2xl text-white cursor-pointer'
                as='button'
                onClick={() => setShowUserOptions(!showUserOptions)}
              />

              {showUserOptions && (
                <div className='hidden lg:block fixed px-4 top-10 bg-primary pb-2'>
                  <div className='w-2 border-8 border-t-transparent border-l-transparent border-r-transparent border-b-blue-300 relative bottom-4 left-12'></div>
                  <UserLinks close={() => setShowUserOptions(false)} />
                </div>
              )}
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
