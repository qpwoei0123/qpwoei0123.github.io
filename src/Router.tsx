import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './page/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <NotFound />,
    children: [
      { index: true, element: <Main/> },
      // {
      //   path: '/theme',
      //   element: <ThemeList />,
      // },
    ],
  },
]);

export default router;
