import { createBrowserRouter } from 'react-router-dom';
import Layout from '../(dashboard)/layout';
import Projects from '../(dashboard)/projects/page';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/projects',
        element: <Projects />,
      },
    ],
  },
]);

export default routes;
