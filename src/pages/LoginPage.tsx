import React from 'react';
import LoginForm from '../components/LoginForm.tsx';

const LoginPage = () => {
    return (
        <div className="flex flex-col items-center gap-24 justify-center w-full">
            <h1 className="font-bold text-4xl">Welcome</h1>
            <LoginForm />
        </div>
        
    )
}

export default LoginPage;