import { HelmetProvider } from 'react-helmet-async';
import { createBrowserRouter } from 'react-router-dom';
import { RootLayoutWithSideBar } from '@/learn/layout/Layout';
import { navigationList } from './navigationList';
import { getSlug } from '@/utils';
import Home from './00-home';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <HelmetProvider>
          <RootLayoutWithSideBar />
        </HelmetProvider>
      ),
      children: [
        { index: true, element: <Home /> },
        ...navigationList.map(({ title, PageElement }) => ({
          path: getSlug(title),
          element: <PageElement />,
        })),
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

export default router;
