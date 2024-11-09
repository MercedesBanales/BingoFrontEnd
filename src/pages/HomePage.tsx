import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import NavigationBar from '../components/NavigationBar.tsx';


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