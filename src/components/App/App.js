import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DashboardRoot } from '../DashboardRoot';

const App = () => {
    return (
        <div>
            <DashboardRoot>
                <Routes>
                    <Route path="/" element={<h1>Home</h1>} />
                    <Route path="/About" element={<h1>About</h1>} />
                    <Route path="/Product" element={<h1>Product</h1>} />
                    <Route path="/Team" element={<h1>Team</h1>} />
                </Routes>
            </DashboardRoot>
        </div>
    );
};

export default App;