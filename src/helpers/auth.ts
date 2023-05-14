import pages from '../constants/pages';
import { useAppSelector } from '../redux/hooks';

/**
 * Get user type and is logged in and return pages.
 * @returns Array<RouteItem>
 *  */ 
export const getAvailablePages = () => {
  const { isLoggedIn } = useAppSelector((state) => state.authReducer);
  const availablePages = isLoggedIn ? pages.private : pages.public;
  return availablePages;
};
