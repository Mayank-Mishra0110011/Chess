const express = require('express');
const socket = require('socket.io');
const app = express();

const server = app.listen(3000, () => {
	console.log('Server Running on Port 3000');
});

app.use(express.static('public'));

const io = socket(server);

let player1 = Math.random() > 0.5 ? 'black' : 'white';
let player2 = player1 == 'white' ? 'black' : 'white';
let sentPlayer1;

io.on('connection', (socket) => {
	console.log('connection established');
	if (!sentPlayer1) {
		io.sockets.emit('start', {
			currentTurn: Math.random() > 0.5 ? 'black' : 'white',
			player: player1
		});
		sentPlayer1 = true;
	} else {
		io.sockets.emit('start', {
			currentTurn: Math.random() > 0.5 ? 'black' : 'white',
			player: player2
		});
	}
	socket.on('end', (data) => {
		io.sockets.emit('end', data);
	});
});
