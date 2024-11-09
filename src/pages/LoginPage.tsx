import React from 'react';
import { useState } from 'react';
import LoginForm from '../components/LoginForm.tsx';

const LoginPage = () => {
    const [error, setError] = useState<string | null>(null);

    return (
        <div className="flex flex-col items-center gap-24 justify-center w-full">
            <h1 className="font-bold text-4xl">Welcome</h1>
            {error && <p>{error}</p>}
            <LoginForm  setError={setError}/>
        </div>
        
    )
}

export default LoginPage;