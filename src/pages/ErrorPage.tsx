import React from 'react';

interface Props {
    title: string;
}

const ErrorPage = ({ title } : Props) => (
    <div className="flex items-center justify-center">
        <h1 className="text-4xl font-medium">{title}</h1>
    </div>
);


export default ErrorPage;