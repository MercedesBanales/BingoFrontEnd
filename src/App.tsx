import './output.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.tsx';

const App = () => {
    return (
        <BrowserRouter>
            <div className="flex justify-center items-center h-fill w-full">
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;