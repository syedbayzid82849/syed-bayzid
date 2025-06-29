import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../../Layouts/HomeLayout/HomeLayout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>HomeLayout
    },
]);

export default router;