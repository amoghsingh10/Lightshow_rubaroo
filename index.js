const express = require('express');
const app = express();
const { Server } = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = new Server(server);
const port = 5050;
const YOUR_LOCAl_IP = '172.22.163.158';
  
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
  
io.on('connection', (socket) => {
socket.on('change background', (color) => {
    io.emit('change background', color);
});
});
  
server.listen(port, YOUR_LOCAl_IP, () => {
    console.log(`Server is listening at the port: ${port}`);
});