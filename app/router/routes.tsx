import { createBrowserRouter } from 'react-router-dom';
import Layout from '../(dashboard)/layout';
import Projects from '../(dashboard)/projects/page';
import Home from '../page';
import Experiences from '../(dashboard)/experiences/page';
import ArticlePage from '../(dashboard)/articles/page';
import Resume from '../(dashboard)/resume/page';
import LinktreePage from '../linktree/page';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Projects />,
      },
    ],
  },
  {
    path: '/experiences',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Experiences />,
      },
    ],
  },
  {
    path: '/articles',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <ArticlePage />,
      },
    ],
  },
  {
    path: '/articles',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Resume />,
      },
    ],
  },
  {
    path: '/linktree',
    element: <LinktreePage />,
  },
]);

export default routes;
