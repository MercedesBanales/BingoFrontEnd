import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';


const HomePage = () => {
    const token = useSelector((state: RootState) => state.auth.token);
    console.log(token)
    return (
        <div>
            <h1>{token}</h1>
        </div>
    )
}

export default HomePage;