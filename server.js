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
	console.log(`Socket ${socket.id} Connected`);
	console.log(`${connections} connected`);
	if (connections == 2) {
		player1 = Math.random() > 0.5 ? 'black' : 'white';
		player2 = player1 == 'white' ? 'black' : 'white';
		firstTurn = Math.random() > 0.5 ? 'black' : 'white';
		io.sockets.emit('ready');
	}
	socket.on('start', (data) => {
		console.log(player1, player2, firstTurn);
		socket.emit('start', {
			currentTurn: firstTurn,
			player: player1 == null ? player2 : player1
		});
		player1 = null;
	});
	socket.on('disconnect', () => {
		connections--;
		console.log(`Socket ${socket.id} Disconnected`);
		console.log(`${connections} connected`);
		if (connections == 1) {
			io.sockets.emit('gameOver');
		}
	});
	socket.on('end', (data) => {
		io.sockets.emit('end', data);
	});
});
