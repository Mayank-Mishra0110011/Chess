/*
	Things to add:
		=> castling 
		=> promotion
		=> checkmate
		=> game logic
*/
let board,
	turn,
	currentPlayer,
	againstComputer = false,
	cpuPlayBtn,
	gameStarted = false,
	playBtn,
	quitBtn,
	waiting = false,
	spinner,
	_spinner,
	pieces = { white: {}, black: {} },
	selfMove,
	capture,
	opponentMove,
	wbd = false;

function setup() {
	createCanvas(windowWidth, windowHeight);
	quitBtn = createButton('Quit Game').position(windowWidth - 474, 100).class('btn btn-sm').mouseClicked(destroy);
	cpuPlayBtn = createButton('Play Against Computer')
		.position(windowWidth / 2 - 324 / 2, windowHeight / 2 - 84 / 2)
		.class('btn')
		.mouseClicked(initCPU);
	playBtn = createButton('Play Against Human')
		.position(windowWidth / 2 - 324 / 2, windowHeight / 2 + 84)
		.class('btn')
		.mouseClicked(init);
	spinner = loadImage('./assets/img/spinner.gif');
	_spinner = createImg('./assets/img/spinner.gif', 'spinner');
	selfMove = loadSound('./assets/sound/selfMove.mp3');
	capture = loadSound('./assets/sound/capture.mp3');
	opponentMove = loadSound('./assets/sound/opponentMove.mp3');
	destroy();
}

function draw() {
	background(255);
	if (gameStarted) {
		if (!waiting) {
			board.drawBoard();
			board.drawPieces();
			if (againstComputer && turn != currentPlayer) {
			}
			textSize(52);
			fill(0);
			text(`${turn}'s turn`, 900, 300);
		} else {
			image(spinner, windowWidth / 2 - spinner.width / 2, windowHeight / 2 - spinner.height / 2);
			_spinner.position(windowWidth / 2 - spinner.width / 2, windowHeight / 2 - spinner.height / 2);
			textSize(42);
			text(
				'Waiting for an opponent to connect...',
				windowWidth / 2 - spinner.width / 2 - 200,
				windowHeight / 2 - spinner.height / 2 - 10
			);
		}
	}
	if (wbd) {
		textSize(42);
		text(
			'Your Opponent Disconnected',
			windowWidth / 2 - spinner.width / 2 - 200,
			windowHeight / 2 - spinner.height / 2 - 50
		);
		text(
			"You've won the last game!!",
			windowWidth / 2 - spinner.width / 2 - 200,
			windowHeight / 2 - spinner.height / 2 + 10
		);
	}
}

function init() {
	wbd = false;
	connect();
	playBtn.hide();
	cpuPlayBtn.hide();
	_spinner.show();
	gameStarted = true;
	waiting = true;
	document.body.style.cursor = 'pointer';
	pieces.black.rook = () => new Rook('black');
	pieces.black.king = () => new King('black');
	pieces.black.queen = () => new Queen('black');
	pieces.black.bishop = () => new Bishop('black');
	pieces.black.knight = () => new Knight('black');
	pieces.black.pawn = () => new Pawn('black');
	pieces.white.rook = () => new Rook('white');
	pieces.white.king = () => new King('white');
	pieces.white.queen = () => new Queen('white');
	pieces.white.bishop = () => new Bishop('white');
	pieces.white.knight = () => new Knight('white');
	pieces.white.pawn = () => new Pawn('white');
}

function destroy() {
	document.body.style.cursor = 'default';
	if (!againstComputer) {
		disconnect();
	} else {
		againstComputer = false;
	}
	quitBtn.hide();
	cpuPlayBtn.show();
	playBtn.show();
	board = null;
	gameStarted = false;
	pieces = { white: {}, black: {} };
	currentPlayer = null;
	turn = null;
}

function winByDefault() {
	destroy();
	wbd = true;
}

function initCPU() {
	wbd = false;
	againstComputer = true;
	playBtn.hide();
	cpuPlayBtn.hide();
	quitBtn.show();
	gameStarted = true;
	waiting = false;
	document.body.style.cursor = 'pointer';
	pieces.black.rook = () => new Rook('black');
	pieces.black.king = () => new King('black');
	pieces.black.queen = () => new Queen('black');
	pieces.black.bishop = () => new Bishop('black');
	pieces.black.knight = () => new Knight('black');
	pieces.black.pawn = () => new Pawn('black');
	pieces.white.rook = () => new Rook('white');
	pieces.white.king = () => new King('white');
	pieces.white.queen = () => new Queen('white');
	pieces.white.bishop = () => new Bishop('white');
	pieces.white.knight = () => new Knight('white');
	pieces.white.pawn = () => new Pawn('white');
	turn = Math.random() > 0.5 ? 'black' : 'white';
	currentPlayer = Math.random() > 0.5 ? 'black' : 'white';
	board = new Board(800, windowHeight, currentPlayer);
}
