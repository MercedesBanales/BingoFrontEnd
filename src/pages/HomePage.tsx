import React from 'react';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
    const navigate = useNavigate();

    const startGame = () => {
        navigate('/lobby');
    }

    return (

        <div>
            <button className="text-white bg-indigo-400 rounded-2xl px-6 py-2 w-fit shadow-md hover:font-semibold hover:shadow-lg" onClick={startGame}>Start Game</button>
        </div>
    )
}

export default HomePage;