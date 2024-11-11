import React from 'react';
import LoginForm from '../components/LoginForm.tsx';

export interface Props {
    onError: (error: string) => void  
}

const LoginPage = ({ onError } : Props) => {
    return (
        <div className="flex flex-col items-center gap-16 justify-center w-2/4 p-8 rounded-2xl">
            <h1 className="font-medium text-4xl font-sans">Welcome</h1>
            <LoginForm  setError={onError}/>
        </div>
        
    )
}

export default LoginPage;