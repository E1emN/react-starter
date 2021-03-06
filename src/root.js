import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assests/styles/main.scss';
const HomePage = lazy(() => import('./pages/home'));

export const AppRouter = () => {
    return(
        <Suspense fallback={<div>loading...</div>}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                </Switch>
            </BrowserRouter>
        </Suspense>
    )
};