import React, { useEffect, useState } from 'react';

const LobbyPage = () => {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [messages, setMessages] = useState<string[]>([]);

    const handleConnectSocket = async () => {
        const s = new WebSocket("ws://localhost:3000/ad2b4e02-8720-4924-95f0-ab767ef02140/1");
        
        s.onopen = function () {
            console.log("Connected to the server.");
        }

        s.onmessage = function (event) {
            console.log("Received message: " + event.data);
        }
    
        s.onclose = function () {
          alert("Connection has been closed.");
        };
        
        setSocket(s);
      };

    useEffect(() => {
        handleConnectSocket();
    }, []);


    return (
        <div>
            <h1>Lobby</h1>
        </div>
    )
}

export default LobbyPage;