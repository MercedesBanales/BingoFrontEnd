import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store.ts';
import { DataPacket, StartDataPacket } from '../types/DataPacket.ts';
import { useNavigate } from 'react-router-dom';
import { startWebSocket, getWebSocket } from '../webSocketHandler.ts';

const MAX_WAIT_TIME = 60000; // 1 minute

const LobbyPage = () => {
    const [time, setTime] = useState<number>(MAX_WAIT_TIME);
    const id = useSelector((state: RootState) => state.auth.id);  
    const navigate = useNavigate();

    const startGame = (gameId: string,) => {
        navigate(`/games/${gameId}`);  
    }

    const goHome = () => {
        navigate('/home');
    }

    const handleConnectSocket = async () => {
            startWebSocket(`ws://localhost:3000/${id}`);
            const socket = getWebSocket();

            socket.onmessage = function (event) {
                const response: StartDataPacket = JSON.parse(event.data) as StartDataPacket;
                if (response.success) startGame(response.data.game_id);
                else goHome();
            };

    };

    useEffect(() => {
        handleConnectSocket();

        const timer = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(timer); 
                    return 0;
                }
                return prevTime - 1000; 
            });
        }, 1000); 

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <p>Waiting for more players to join...</p>
            <p>Time remaining: {time / 1000} seconds</p> {/* Show time in seconds */}
        </div>
    );
}

export default LobbyPage;