import React from 'react';

// Components
import HomePage from '../pages/Home/HomePage'
import DetailsPage from '../pages/Details/DetailsItem'
import NotFound from '../pages/Error/404'

const routes = [
    {
        path: '/',
        exact: true,
        component: () => <HomePage/>
    },
    {
        path: '/details',
        exact: true,
        component: () => <DetailsPage/>
    },
    {
        path: '',
        exact: false,
        component: () => <NotFound/>
    }
]

export default routes