import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import NavigationBar from '../components/NavigationBar.tsx';


const HomePage = () => {
    return (
        <div>
            <button className="text-white bg-indigo-600 rounded-2xl px-6 py-2 w-fit shadow-md hover:font-semibold hover:shadow-lg">Start Game</button>
        </div>
    )
}

export default HomePage;