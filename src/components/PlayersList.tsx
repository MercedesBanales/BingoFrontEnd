import React from 'react';
import { Player } from '../types/Player.ts';

interface Props {
    players: Player[]
}

const PlayersList = ({ players }: Props) => {
    return (
        <div className="flex justify-center items-stretch w-full">
            <ul className="w-full overflow-y-auto p-4 flex-1">
                {players.map((player: Player) => (
                    <li className="p-2" key={player.id}>{player.email}</li>
                ))}
            </ul>
        </div>
    );

}

export default PlayersList;