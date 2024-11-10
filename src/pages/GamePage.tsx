import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store.ts';
import { CardDataPacket, PlayersDataPacket, SequenceDataPacket } from '../types/DataPacket.ts';
import { getWebSocket } from '../webSocketHandler.ts';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../components/Card.tsx';
import PlayersList from '../components/PlayersList.tsx';
import Sequence from '../components/Sequence.tsx';
import LoadingAlert from '../components/LoadingAlert.tsx';

interface Props {
    onError: (error: string) => void
}

const GamePage = ({ onError } : Props) => {
    const player_id = useSelector((state: RootState) => state.auth.id);
    const [card, setCard] = useState([[]]);
    const [players, setPlayers] = useState([]);
    const [sequence, setSequence] = useState([]);
    const [loading, setLoading] = useState('');
    const { id } = useParams();
    const socket = getWebSocket();
    const navigate = useNavigate();

    const handleConnectionSocket = () => {
        socket.onmessage = function (event) {
            const response = JSON.parse(event.data);

            if (response.success) {
                switch (response.action) {
                    case 'PUT':
                        setCard(response.data.card);
                        break;
                    case 'BINGO':
                        console.log(response.data);
                        break;
                    case 'GET_CARD':
                        response as CardDataPacket;
                        setCard(response.data.card);
                        setLoading('');
                        break;
                    case 'GET_PLAYERS':
                        response as PlayersDataPacket;
                        console.log(response.data.players);
                        setPlayers(response.data.players);
                        setLoading('');
                        break;
                    case 'SEQ':
                        response as SequenceDataPacket;
                        setSequence(response.data.sequence);
                        break;
                    default:
                        break;
                }
            }  else {
                if (response.action === 'GET_CARD') {
                    console.log(response.data.message);
                    setLoading('Loading card');
                    loadCard();
                } else if (response.action === 'GET_PLAYERS') {
                    console.log(response.data.message);
                    setLoading('Loading players');
                    loadPlayers();
                } else {
                    onError(response.data.message);
                    if (response.action === 'BINGO') {
                        navigate('/home');
                    }
                }
            }
        };
        
    }

    const handlePut = (coord_x: number, coord_y: number) => {
        socket.send(JSON.stringify({ type: 'REQUEST', success: true, action: 'PUT', data: { player_id: player_id, game_id: id, coord_x: coord_x, coord_y: coord_y} }));
    }

    const handleBingo = () => {
        socket.send(JSON.stringify({ type: 'REQUEST', success: true, action: 'BINGO', data: { player_id: player_id, game_id: id} }));
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
        <>
        {loading!=='' && <LoadingAlert message={loading} />}
        {loading==='' && <div className="flex flex-col justify-center items-center gap-12 px-32">
            <div>
                <Sequence sequence={sequence.join(',')}/>
            </div>
            <div className="flex justify-center gap-40 items-stretch w-fit">
                <div className="flex flex-col justify-center items-center gap-12">
                    <Card card={card} onClick={handlePut} />
                    <button className="bg-indigo-500 px-6 py-4 rounded-2xl text-white shadow-md hover:font-medium hover:bg-indigo-700" onClick={handleBingo}>BINGO</button>
                </div>
                <div className="flex-1 bg-indigo-100 rounded-lg">
                    <PlayersList players={players} />
                </div>
             </div>
        </div>}
        </>
    )
}

export default GamePage;

