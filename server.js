const express = require('express');
const WebSocket = require('ws');
const app = express();
const port = 3000;

// Serve static files (frontend)
app.use(express.static('public'));

const server = app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// WebSocket setup
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('New client connected');

    // Broadcast incoming message to all clients
    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        // Broadcast the message to all clients except the sender
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    // Handle client disconnection
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
