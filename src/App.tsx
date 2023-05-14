import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import { getAvailablePages } from './helpers/auth';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  const availablePages = getAvailablePages();

  return (
    <Routes>
      <Route element={<Layout />}>
        {availablePages.map(({ path, Element, title }) => (
          <Route key={title} path={path} element={<Element />} />
        ))}
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
