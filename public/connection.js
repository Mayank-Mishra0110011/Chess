let socket;

function connect() {
	socket = io.connect('http://localhost:3000');
	socket.on('end', (data) => {
		if (data.piece.color == currentPlayer) {
			if (
				board.grid[data.move.To._i][data.move.To._j].piece &&
				board.grid[data.move.To._i][data.move.To._j].piece.color != currentPlayer
			) {
				capture.play();
			} else {
				selfMove.play();
			}
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
			opponentMove.play();
		}
		turn = data.currentTurn;
	});
	socket.on('start', (data) => {
		turn = data.currentTurn;
		currentPlayer = data.player;
		gameStarted = true;
		waiting = false;
		quitBtn.show();
		_spinner.hide();
		board = new Board(800, windowHeight, currentPlayer);
	});
	socket.on('ready', () => {
		emit('start', null);
	});
	socket.on('gameOver', () => {
		winByDefault();
	});
}

function disconnect() {
	if (socket) {
		socket.disconnect({ id: socket.id });
		socket = null;
	}
}

function emit(event, data) {
	if (socket) {
		socket.emit(event, data);
	}
}
