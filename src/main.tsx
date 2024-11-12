import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

// import Home from '@/pages/Home.tsx';

const Home = React.lazy(() => import('@/pages/Home'));
const Chat = React.lazy(() => import('@/pages/Chat'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'c',
    element: <Chat />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <React.Suspense>
      <RouterProvider router={router} />
    </React.Suspense>
  </StrictMode>
);
