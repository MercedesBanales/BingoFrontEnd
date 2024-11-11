let socket: WebSocket;

export const startWebSocket = (url: string) => {
    socket = new WebSocket(url);

    socket.onopen = function () {
        console.log("Connected to the server.");
    };

    socket.onclose = function () {
        console.log("Connection has been closed.");
    }
}

export const getWebSocket = () => {
    return socket;
}