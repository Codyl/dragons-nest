import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

const NotFoundPage = () => {
  const { isLoggedIn } = useAppSelector((state) => state.authReducer);
  const home = isLoggedIn ? '/skills' : '/';
  return (
    <div>
      <h1>404</h1>
      <p>
        Whoops, that's embarressing. You found a page that does not exist. Click
        below to go home.
      </p>
      <Link to={home}>Home</Link>
    </div>
  );
};

export default NotFoundPage;
