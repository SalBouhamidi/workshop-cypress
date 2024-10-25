import { lazy } from 'react';
const Index = lazy(() => import('../pages/Index'));
const Menu = lazy(() => import('../pages/menu/Menu'));

const routes = [
    // dashboard
    {
        path: '/',
        element: <Index />,
        layout: 'default',
    },
    {
        path: '/menus',
        element: <Menu />,
        layout: 'default',
    },

];

export { routes };
