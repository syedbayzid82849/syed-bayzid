import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../../Layouts/HomeLayout/HomeLayout';
import NotFound from '../../Components/notFound/NotFound';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>, 
        errorElement: <NotFound></NotFound>
    },
]);

export default router;