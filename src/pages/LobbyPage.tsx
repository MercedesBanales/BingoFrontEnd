import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store.ts';
import { DataPacket } from '../types/DataPacket.ts';
import { useNavigate } from 'react-router-dom';

const MAX_WAIT_TIME = 60000; // 1 minute

const LobbyPage = () => {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [time, setTime] = useState<number>(MAX_WAIT_TIME);
    const id = useSelector((state: RootState) => state.auth.id);  
    const navigate = useNavigate();

    const startGame = (gameId: string) => {
        navigate(`/games/${gameId}`);
    }

    const goHome = () => {
        navigate('/home');
    }

    const handleConnectSocket = async () => {
        if (!socket) {
            const s = new WebSocket(`ws://localhost:3000/${id}`);

            s.onopen = function () {
                console.log("Connected to the server.");
            };

            s.onmessage = function (event) {
                const response: DataPacket = JSON.parse(event.data);
                if (response.success) startGame(response.data.game_id!);
                else goHome();
            };

            s.onclose = function () {
                console.log("Connection has been closed.");
            };

            setSocket(s);
        }
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
            if (socket) {
                socket.close(); // Close the WebSocket connection when the component unmounts
            }
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
