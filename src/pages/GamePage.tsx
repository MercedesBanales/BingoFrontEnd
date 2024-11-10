import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store.ts';
import { DataPacket, CardDataPacket, PlayersDataPacket } from '../types/DataPacket.ts';
import { getWebSocket } from '../webSocketHandler.ts';
import { useParams } from 'react-router-dom';
import Card from '../components/Card.tsx';
import PlayersList from '../components/PlayersList.tsx';

const GamePage = () => {
    const player_id = useSelector((state: RootState) => state.auth.id);
    const [card, setCard] = useState([[]]);
    const [players, setPlayers] = useState([]);
    const { id } = useParams();
    const socket = getWebSocket();

    const handleConnectionSocket = () => {
        socket.onmessage = function (event) {
            const response = JSON.parse(event.data);

            if (response.success) {
                switch (response.action) {
                    case 'PUT':
                        console.log(response.data);
                        break;
                    case 'BINGO':
                        console.log(response.data);
                        break;
                    case 'GET_CARD':
                        response as CardDataPacket;
                        setCard(response.data.card);
                        break;
                    case 'GET_PLAYERS':
                        response as PlayersDataPacket;
                        setPlayers(response.data.players);
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
        <div className="flex justify-center gap-72 p-48 items-stretch w-full">
           <div>
                <Card card={card} />
            </div>
            <div className="flex-1 bg-indigo-100 rounded-lg">
                <PlayersList players={players} />
            </div>
        </div>
    )
}

export default GamePage;

