import { lazy } from 'react';
import Resturant from '../pages/resturant/Resturant';
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
    {
        path: '/dashboard/Restaurants',
        element: <Resturant />,
        layout: 'default',
    },
];

export { routes };
