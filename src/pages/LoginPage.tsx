import React from 'react';
import { useState } from 'react';
import LoginForm from '../components/LoginForm.tsx';
import ErrorDialog from '../components/ErrorDialog.tsx';

const LoginPage = () => {
    const [error, setError] = useState<string | null>(null);

    return (
        <div className="flex flex-col items-center gap-24 justify-center w-full">
            <h1 className="font-bold text-4xl">Welcome</h1>
            {error && <ErrorDialog error={error} onClose={() => {setError('')}}/>}
            <LoginForm  setError={setError}/>
        </div>
        
    )
}

export default LoginPage;