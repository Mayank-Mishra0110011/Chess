const express = require('express');
const socket = require('socket.io');
const app = express();

const server = app.listen(3000, () => {
	console.log('Server Running on Port 3000');
});

app.use(express.static('public'));

const io = socket(server);

let player1, player2, firstTurn;
connections = 0;

io.on('connection', (socket) => {
	connections++;
	if (connections == 2) {
		player1 = Math.random() > 0.5 ? 'black' : 'white';
		player2 = player1 == 'white' ? 'black' : 'white';
		firstTurn = Math.random() > 0.5 ? 'black' : 'white';
		io.sockets.emit('ready');
	}
	socket.on('start', () => {
		socket.emit('start', {
			currentTurn: firstTurn,
			player: player1 == null ? player2 : player1
		});
		player1 = null;
	});
	socket.on('disconnect', () => {
		connections--;
		if (connections == 1) {
			io.sockets.emit('gameOver');
		}
	});
	socket.on('end', (data) => {
		io.sockets.emit('end', data);
	});
});
