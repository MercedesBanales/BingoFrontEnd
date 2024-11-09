import './output.css';
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage.tsx';
import HomePage from './pages/HomePage.tsx';
import NavigationBar from './components/NavigationBar.tsx';

const App = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
};

const AppRoutes = () => {
    const location = useLocation();

    return (
        <>
        {location.pathname !== '/login' && <NavigationBar />}

        <div className="flex justify-center items-center h-full w-full">
            {/* Conditionally render NavigationBar */}
            
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </div>
        </>
    );
};

export default App;
