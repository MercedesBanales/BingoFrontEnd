import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store.ts';
import { DataPacket } from '../types/DataPacket.ts';
import { getWebSocket } from '../webSocketHandler.ts';
import { useParams } from 'react-router-dom';

const GamePage = () => {
    const player_id = useSelector((state: RootState) => state.auth.id);
    const [card, setCard] = useState([[]]);
    const { id } = useParams();
    const socket = getWebSocket();

    const handleConnectionSocket = () => {
        socket.onmessage = function (event) {
            const response: DataPacket = JSON.parse(event.data);
            console.log(response)

            if (response.success) {
                switch (response.action) {
                    case 'PUT':
                        console.log(response.data);
                        break;
                    case 'BINGO':
                        console.log(response.data);
                        break;
                    case 'GET_CARD':
                        console.log(response.data);
                        break;
                    case 'GET_PLAYERS':
                        console.log(response.data);
                        break;
                }
            } 

        };
        
    }

    const loadCard = () => {
        socket.send(JSON.stringify({ type: 'REQUEST', success: true, action: 'GET_CARD', data: { player_id: player_id, game_id: id} }));
    }

    const loadPlayers = () => {
        socket.send(JSON.stringify({ type: 'REQUEST', sucess: true, action: 'GET_PLAYERS', data: { game_id: id} }));
    }

    useEffect(() => {
        handleConnectionSocket();
        loadCard();
        loadPlayers();

    }, [])

    return (
        <div>
            <h1>Game Page</h1>
        </div>
    )
}

export default GamePage;

