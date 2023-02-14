import React, { } from 'react';
import * as R from "ramda";
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AppLayout } from '../../ui/layouts/AppLayout';
import { DashboardRoot } from '../DashboardRoot';

const getTitle = R.cond([
    [R.equals("/"), R.always("Главное меню")],
    [R.equals("/product"), R.always("Продукция")],
    [R.equals("/about"), R.always("О Нас")],
    [R.equals("/team"), R.always("Команда")],
    [R.T, R.always("Главное меню")]
])

const App = () => {
    const location = useLocation();
    const title = getTitle(location.pathname)

    return (
        <AppLayout tabTitle={`Antd - ${title}`}>
            <DashboardRoot>
                <Routes>
                    <Route path="/" element={<h1>Home</h1>} />
                    <Route path="/about" element={<h1>About</h1>} />
                    <Route path="/product" element={<h1>Product</h1>} />
                    <Route path="/team" element={<h1>Team</h1>} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </DashboardRoot>
        </AppLayout>
    );
};

export default App;