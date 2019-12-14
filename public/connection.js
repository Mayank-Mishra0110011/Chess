const socket = io.connect('http://localhost:3000');

function emit(event, data) {
	socket.emit(event, data);
}

socket.on('end', (data) => {
	if (data.piece.color == currentPlayer) {
		move(data.move.From, data.move.To);
	} else {
		let from = {
			_i: data.move.From._i,
			_j: 7 - data.move.From._j
		};
		let to = {
			_i: data.move.To._i,
			_j: 7 - data.move.To._j
		};
		move(from, to);
	}
	turn = data.currentTurn;
});

socket.on('start', (data) => {
	turn = data.currentTurn;
	currentPlayer = data.player;
});
