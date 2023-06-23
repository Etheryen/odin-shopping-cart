import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home-page';
import ShopPage from './pages/shop-page';
import { Root } from './root';
import { MainLayout } from './layouts/main';
import CartPage from './pages/cart-page';

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: '/',
            element: <HomePage />,
          },
          {
            path: '/shop',
            element: <ShopPage />,
          },
          {
            path: '/cart',
            element: <CartPage />,
          },
        ],
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
