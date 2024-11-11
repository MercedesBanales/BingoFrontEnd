import React from 'react';

const LobbyComponent = ({ time }) => {
    return (
        <div>
            <p>Waiting for more players to join...</p>
            <p>Time remaining: {time / 1000} seconds</p> 
        </div>
    );
}

export default LobbyComponent;