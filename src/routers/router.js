import React from 'react';

// Components
import HomePage from '../pages/Home/HomePage'
import NotFound from '../pages/Error/404'

const routes = [
    {
        path: '/',
        exact: true,
        component: () => <HomePage/>
    },
    {
        path: '',
        exact: false,
        component: () => <NotFound/>
    }
]

export default routes