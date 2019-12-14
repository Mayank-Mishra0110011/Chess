/*
	Things to add:
		=> castling 
		=> promotion
		=> checkmate
		=> game logic
*/
let board, turn, currentPlayer;
const pieces = { white: {}, black: {} };

function setup() {
	createCanvas(windowWidth, windowHeight);
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
	board = new Board(800, windowHeight, currentPlayer);
}

function draw() {
	background(255);
	board.drawBoard();
	board.drawPieces();
	textSize(52);
	fill(0);
	text(`${turn}'s turn`, 900, 300);
}
