import './output.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.tsx';
import HomePage from './pages/HomePage.tsx';

const App = () => {
    return (
        <BrowserRouter>
            <div className="flex justify-center items-center h-fill w-full">
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/home" element={<HomePage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;