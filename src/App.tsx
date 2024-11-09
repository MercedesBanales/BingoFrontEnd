import './output.css';
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage.tsx';
import HomePage from './pages/HomePage.tsx';
import NavigationBar from './components/NavigationBar.tsx';
import ErrorDialog from './components/ErrorDialog.tsx';
import LobbyPage from './pages/LobbyPage.tsx';

const App = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
};

const AppRoutes = () => {
    const location = useLocation();
    const [error, setError] = React.useState<string | null>(null);

    return (
        <div className="flex flex-col min-h-screen">
        {location.pathname !== '/login' && <NavigationBar onError={setError}/>}
        {error && <ErrorDialog error={error} onClose={() => setError('')} />}
        <div className="flex-grow flex justify-center items-center">
                <Routes>
                    <Route path="/login" element={<LoginPage onError={setError} />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/lobby" element={<LobbyPage />} />
                </Routes>
        </div>
        </div>
    );
};

export default App;
