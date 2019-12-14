let moveLocked = false;

class King {
	constructor(color) {
		this.color = color;
		this.locked = false;
		this.type = 'king';
		this.img = loadImage(`./assets/img/${color}/king.svg`);
	}
	isValidMove(i, j, location) {
		const moves = [
			{ _i: i - 1, _j: j - 1 },
			{ _i: i, _j: j - 1 },
			{ _i: i + 1, _j: j - 1 },
			{ _i: i - 1, _j: j },
			{ _i: i + 1, _j: j },
			{ _i: i - 1, _j: j + 1 },
			{ _i: i, _j: j + 1 },
			{ _i: i + 1, _j: j + 1 }
		];
		for (let k = 0; k < moves.length; k++) {
			if (moves[k]._i >= 0 && moves[k]._i < 8 && moves[k]._j >= 0 && moves[k]._j < 8) {
				if (
					board.grid[moves[k]._i][moves[k]._j].piece == null &&
					moves[k]._i == location._i &&
					moves[k]._j == location._j
				) {
					return true;
				} else if (
					board.grid[moves[k]._i][moves[k]._j].piece &&
					board.grid[moves[k]._i][moves[k]._j].piece.color != this.color &&
					moves[k]._i == location._i &&
					moves[k]._j == location._j
				) {
					return true;
				}
			}
		}
		return false;
	}
	showMoves(i, j) {
		if (moveLocked && !this.locked) return;
		const moves = [
			{ _i: i - 1, _j: j - 1 },
			{ _i: i, _j: j - 1 },
			{ _i: i + 1, _j: j - 1 },
			{ _i: i - 1, _j: j },
			{ _i: i + 1, _j: j },
			{ _i: i - 1, _j: j + 1 },
			{ _i: i, _j: j + 1 },
			{ _i: i + 1, _j: j + 1 }
		];
		for (let k = 0; k < moves.length; k++) {
			if (moves[k]._i >= 0 && moves[k]._i < 8 && moves[k]._j >= 0 && moves[k]._j < 8) {
				let di = moves[k]._i;
				let dj = moves[k]._j;
				if (board.grid[moves[k]._i][moves[k]._j].piece == null) {
					fill(176, 216, 230);
					rect(board.grid[di][dj].x, board.grid[di][dj].y, board.width, board.height);
				} else if (board.grid[moves[k]._i][moves[k]._j].piece.color != this.color) {
					fill(168, 0, 0);
					rect(board.grid[di][dj].x, board.grid[di][dj].y, board.width, board.height);
					image(
						board.grid[di][dj].piece.img,
						board.grid[di][dj].x + board.width / 3,
						board.grid[di][dj].y + board.height / 4
					);
				}
			}
		}
	}
}

class Rook {
	constructor(color) {
		this.color = color;
		this.locked = false;
		this.type = 'rook';
		this.img = loadImage(`./assets/img/${color}/rook.svg`);
	}
	isValidMove(i, j, location) {
		const moves = [];
		for (let di = i, dj = j - 1; dj >= 0; dj--) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i, dj = j + 1; dj < 8; dj++) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i - 1, dj = j; di >= 0; di--) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i + 1, dj = j; di < 8; di++) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let k = 0; k < moves.length; k++) {
			if (moves[k]._i >= 0 && moves[k]._i < 8 && moves[k]._j >= 0 && moves[k]._j < 8) {
				if (
					board.grid[moves[k]._i][moves[k]._j].piece == null &&
					moves[k]._i == location._i &&
					moves[k]._j == location._j
				) {
					return true;
				} else if (
					board.grid[moves[k]._i][moves[k]._j].piece &&
					board.grid[moves[k]._i][moves[k]._j].piece.color != this.color
				) {
					return true;
				}
			}
		}
		return false;
	}
	showMoves(i, j) {
		if (moveLocked && !this.locked) return;
		const moves = [];
		for (let di = i, dj = j - 1; dj >= 0; dj--) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i, dj = j + 1; dj < 8; dj++) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i - 1, dj = j; di >= 0; di--) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i + 1, dj = j; di < 8; di++) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let k = 0; k < moves.length; k++) {
			if (moves[k]._i >= 0 && moves[k]._i < 8 && moves[k]._j >= 0 && moves[k]._j < 8) {
				let di = moves[k]._i;
				let dj = moves[k]._j;
				if (board.grid[moves[k]._i][moves[k]._j].piece == null) {
					fill(176, 216, 230);
					rect(board.grid[di][dj].x, board.grid[di][dj].y, board.width, board.height);
				} else if (board.grid[moves[k]._i][moves[k]._j].piece.color != this.color) {
					fill(168, 0, 0);
					rect(board.grid[di][dj].x, board.grid[di][dj].y, board.width, board.height);
					image(
						board.grid[di][dj].piece.img,
						board.grid[di][dj].x + board.width / 3,
						board.grid[di][dj].y + board.height / 4
					);
				}
			}
		}
	}
}

class Bishop {
	constructor(color) {
		this.color = color;
		this.locked = false;
		this.type = 'bishop';
		this.img = loadImage(`./assets/img/${color}/bishop.svg`);
	}
	isValidMove(i, j, location) {
		const moves = [];
		for (let di = i + 1, dj = j + 1; di < 8 && dj < 8; di++, dj++) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i + 1, dj = j - 1; di < 8 && dj >= 0; di++, dj--) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i - 1, dj = j + 1; di >= 0 && dj < 8; di--, dj++) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i - 1, dj = j - 1; di >= 0 && dj >= 0; di--, dj--) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let k = 0; k < moves.length; k++) {
			if (moves[k]._i >= 0 && moves[k]._i < 8 && moves[k]._j >= 0 && moves[k]._j < 8) {
				if (
					board.grid[moves[k]._i][moves[k]._j].piece == null &&
					moves[k]._i == location._i &&
					moves[k]._j == location._j
				) {
					return true;
				} else if (
					board.grid[moves[k]._i][moves[k]._j].piece &&
					board.grid[moves[k]._i][moves[k]._j].piece.color != this.color
				) {
					return true;
				}
			}
		}
		return false;
	}
	showMoves(i, j) {
		if (moveLocked && !this.locked) return;
		const moves = [];
		for (let di = i + 1, dj = j + 1; di < 8 && dj < 8; di++, dj++) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i + 1, dj = j - 1; di < 8 && dj >= 0; di++, dj--) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i - 1, dj = j + 1; di >= 0 && dj < 8; di--, dj++) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i - 1, dj = j - 1; di >= 0 && dj >= 0; di--, dj--) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let k = 0; k < moves.length; k++) {
			if (moves[k]._i >= 0 && moves[k]._i < 8 && moves[k]._j >= 0 && moves[k]._j < 8) {
				let di = moves[k]._i;
				let dj = moves[k]._j;
				if (board.grid[moves[k]._i][moves[k]._j].piece == null) {
					fill(176, 216, 230);
					rect(board.grid[di][dj].x, board.grid[di][dj].y, board.width, board.height);
				} else if (board.grid[moves[k]._i][moves[k]._j].piece.color != this.color) {
					fill(168, 0, 0);
					rect(board.grid[di][dj].x, board.grid[di][dj].y, board.width, board.height);
					image(
						board.grid[di][dj].piece.img,
						board.grid[di][dj].x + board.width / 3,
						board.grid[di][dj].y + board.height / 4
					);
				}
			}
		}
	}
}

class Knight {
	constructor(color) {
		this.color = color;
		this.locked = false;
		this.type = 'knight';
		this.img = loadImage(`./assets/img/${color}/knight.svg`);
	}
	isValidMove(i, j, location) {
		const moves = [
			{ _i: i - 1, _j: j - 2 },
			{ _i: i + 1, _j: j - 2 },
			{ _i: i - 2, _j: j - 1 },
			{ _i: i + 2, _j: j - 1 },
			{ _i: i - 2, _j: j + 1 },
			{ _i: i + 2, _j: j + 1 },
			{ _i: i + 1, _j: j + 2 },
			{ _i: i - 1, _j: j + 2 }
		];
		for (let k = 0; k < moves.length; k++) {
			if (moves[k]._i >= 0 && moves[k]._i < 8 && moves[k]._j >= 0 && moves[k]._j < 8) {
				if (
					board.grid[moves[k]._i][moves[k]._j].piece == null &&
					moves[k]._i == location._i &&
					moves[k]._j == location._j
				) {
					return true;
				} else if (
					board.grid[moves[k]._i][moves[k]._j].piece &&
					board.grid[moves[k]._i][moves[k]._j].piece.color != this.color &&
					moves[k]._i == location._i &&
					moves[k]._j == location._j
				) {
					return true;
				}
			}
		}
		return false;
	}
	showMoves(i, j) {
		if (moveLocked && !this.locked) return;
		const moves = [
			{ _i: i - 1, _j: j - 2 },
			{ _i: i + 1, _j: j - 2 },
			{ _i: i - 2, _j: j - 1 },
			{ _i: i + 2, _j: j - 1 },
			{ _i: i - 2, _j: j + 1 },
			{ _i: i + 2, _j: j + 1 },
			{ _i: i + 1, _j: j + 2 },
			{ _i: i - 1, _j: j + 2 }
		];
		for (let k = 0; k < moves.length; k++) {
			if (moves[k]._i >= 0 && moves[k]._i < 8 && moves[k]._j >= 0 && moves[k]._j < 8) {
				let di = moves[k]._i;
				let dj = moves[k]._j;
				if (board.grid[moves[k]._i][moves[k]._j].piece == null) {
					fill(176, 216, 230);
					rect(board.grid[di][dj].x, board.grid[di][dj].y, board.width, board.height);
				} else if (board.grid[moves[k]._i][moves[k]._j].piece.color != this.color) {
					fill(168, 0, 0);
					rect(board.grid[di][dj].x, board.grid[di][dj].y, board.width, board.height);
					image(
						board.grid[di][dj].piece.img,
						board.grid[di][dj].x + board.width / 3,
						board.grid[di][dj].y + board.height / 4
					);
				}
			}
		}
	}
}

class Pawn {
	constructor(color) {
		this.color = color;
		this.locked = false;
		this.type = 'pawn';
		this.img = loadImage(`./assets/img/${color}/pawn.svg`);
	}
	isValidMove(i, j, location) {
		if (i + 1 < location._i || i - 1 > location._i) return false;
		if (board.grid[i][j].type == 'bottomPiece') {
			if (j == 6) {
				if (j - 1 == location._j && board.grid[location._i][location._j].piece == null && i == location._i) {
					return true;
				} else if (
					j - 2 == location._j &&
					board.grid[location._i][location._j].piece == null &&
					i == location._i
				) {
					return true;
				}
			} else {
				if (j - 1 == location._j && board.grid[location._i][location._j].piece == null && i == location._i) {
					return true;
				}
			}
			if (j - 1 >= 0) {
				if (
					i + 1 < 8 &&
					board.grid[i + 1][j - 1].piece != null &&
					board.grid[i + 1][j - 1].piece.color != this.color
				) {
					return true;
				}
				if (
					i - 1 >= 0 &&
					board.grid[i - 1][j - 1].piece != null &&
					board.grid[i - 1][j - 1].piece.color != this.color
				) {
					return true;
				}
			}
		} else {
			if (j == 1) {
				if (j + 1 == location._j && board.grid[location._i][location._j].piece == null && i == location._i) {
					return true;
				} else if (
					j + 2 == location._j &&
					board.grid[location._i][location._j].piece == null &&
					i == location._i
				) {
					return true;
				}
			} else {
				if (j + 1 == location._j && board.grid[location._i][location._j].piece == null && i == location._i) {
					return true;
				}
			}
			if (j + 1 < 8) {
				if (
					i + 1 < 8 &&
					board.grid[i + 1][j + 1].piece != null &&
					board.grid[i + 1][j + 1].piece.color != this.color
				) {
					return true;
				}
				if (
					i - 1 >= 0 &&
					board.grid[i - 1][j + 1].piece != null &&
					board.grid[i - 1][j + 1].piece.color != this.color
				) {
					return true;
				}
			}
		}
		return false;
	}
	showMoves(i, j) {
		if (moveLocked && !this.locked) return;
		fill(176, 216, 230);
		if (board.grid[i][j].type == 'bottomPiece') {
			if (j == 6) {
				if (board.grid[i][j - 1].piece == null) {
					rect(board.grid[i][j - 1].x, board.grid[i][j - 1].y, board.width, board.height);
					if (board.grid[i][j - 2].piece == null) {
						rect(board.grid[i][j - 2].x, board.grid[i][j - 2].y, board.width, board.height);
					}
				}
			} else {
				if (board.grid[i][j - 1].piece == null) {
					rect(board.grid[i][j - 1].x, board.grid[i][j - 1].y, board.width, board.height);
				}
			}
			if (j - 1 >= 0) {
				if (
					i + 1 < 8 &&
					board.grid[i + 1][j - 1].piece != null &&
					board.grid[i + 1][j - 1].piece.color != this.color
				) {
					fill(128, 0, 0);
					rect(board.grid[i + 1][j - 1].x, board.grid[i + 1][j - 1].y, board.width, board.height);
					image(
						board.grid[i + 1][j - 1].piece.img,
						board.grid[i + 1][j - 1].x + board.width / 3,
						board.grid[i + 1][j - 1].y + board.height / 4
					);
				}
				if (
					i - 1 >= 0 &&
					board.grid[i - 1][j - 1].piece != null &&
					board.grid[i - 1][j - 1].piece.color != this.color
				) {
					fill(128, 0, 0);
					rect(board.grid[i - 1][j - 1].x, board.grid[i - 1][j - 1].y, board.width, board.height);
					image(
						board.grid[i - 1][j - 1].piece.img,
						board.grid[i - 1][j - 1].x + board.width / 3,
						board.grid[i - 1][j - 1].y + board.height / 4
					);
				}
			}
		} else {
			if (j == 1) {
				if (board.grid[i][j + 1].piece == null) {
					rect(board.grid[i][j + 1].x, board.grid[i][j + 1].y, board.width, board.height);
					if (board.grid[i][j + 2].piece == null) {
						rect(board.grid[i][j + 2].x, board.grid[i][j + 2].y, board.width, board.height);
					}
				}
			} else {
				if (board.grid[i][j + 1].piece == null) {
					rect(board.grid[i][j + 1].x, board.grid[i][j + 1].y, board.width, board.height);
				}
			}
			if (j + 1 < 8) {
				if (
					i + 1 < 8 &&
					board.grid[i + 1][j + 1].piece != null &&
					board.grid[i + 1][j + 1].piece.color != this.color
				) {
					fill(128, 0, 0);
					rect(board.grid[i + 1][j + 1].x, board.grid[i + 1][j + 1].y, board.width, board.height);
					image(
						board.grid[i + 1][j + 1].piece.img,
						board.grid[i + 1][j + 1].x + board.width / 3,
						board.grid[i + 1][j + 1].y + board.height / 4
					);
				}
				if (
					i - 1 >= 0 &&
					board.grid[i - 1][j + 1].piece != null &&
					board.grid[i - 1][j + 1].piece.color != this.color
				) {
					fill(128, 0, 0);
					rect(board.grid[i - 1][j + 1].x, board.grid[i - 1][j + 1].y, board.width, board.height);
					image(
						board.grid[i - 1][j + 1].piece.img,
						board.grid[i - 1][j + 1].x + board.width / 3,
						board.grid[i - 1][j + 1].y + board.height / 4
					);
				}
			}
		}
	}
}

class Queen {
	constructor(color) {
		this.color = color;
		this.type = 'queen';
		this.locked = false;
		this.img = loadImage(`./assets/img/${color}/queen.svg`);
	}
	isValidMove(i, j, location) {
		const moves = [];
		for (let di = i + 1, dj = j + 1; di < 8 && dj < 8; di++, dj++) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i + 1, dj = j - 1; di < 8 && dj >= 0; di++, dj--) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i - 1, dj = j + 1; di >= 0 && dj < 8; di--, dj++) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i - 1, dj = j - 1; di >= 0 && dj >= 0; di--, dj--) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i, dj = j - 1; dj >= 0; dj--) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i, dj = j + 1; dj < 8; dj++) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i - 1, dj = j; di >= 0; di--) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i + 1, dj = j; di < 8; di++) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let k = 0; k < moves.length; k++) {
			if (moves[k]._i >= 0 && moves[k]._i < 8 && moves[k]._j >= 0 && moves[k]._j < 8) {
				if (
					board.grid[moves[k]._i][moves[k]._j].piece == null &&
					moves[k]._i == location._i &&
					moves[k]._j == location._j
				) {
					return true;
				} else if (
					board.grid[moves[k]._i][moves[k]._j].piece &&
					board.grid[moves[k]._i][moves[k]._j].piece.color != this.color
				) {
					return true;
				}
			}
		}
		return false;
	}
	showMoves(i, j) {
		if (moveLocked && !this.locked) return;
		const moves = [];
		for (let di = i + 1, dj = j + 1; di < 8 && dj < 8; di++, dj++) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i + 1, dj = j - 1; di < 8 && dj >= 0; di++, dj--) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i - 1, dj = j + 1; di >= 0 && dj < 8; di--, dj++) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i - 1, dj = j - 1; di >= 0 && dj >= 0; di--, dj--) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i, dj = j - 1; dj >= 0; dj--) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i, dj = j + 1; dj < 8; dj++) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i - 1, dj = j; di >= 0; di--) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let di = i + 1, dj = j; di < 8; di++) {
			if (board.grid[di][dj].piece == null) {
				moves.push({ _i: di, _j: dj });
			} else if (board.grid[di][dj].piece && board.grid[di][dj].piece.color != this.color) {
				moves.push({ _i: di, _j: dj });
				break;
			} else {
				break;
			}
		}
		for (let k = 0; k < moves.length; k++) {
			if (moves[k]._i >= 0 && moves[k]._i < 8 && moves[k]._j >= 0 && moves[k]._j < 8) {
				let di = moves[k]._i;
				let dj = moves[k]._j;
				if (board.grid[moves[k]._i][moves[k]._j].piece == null) {
					fill(176, 216, 230);
					rect(board.grid[di][dj].x, board.grid[di][dj].y, board.width, board.height);
				} else if (board.grid[moves[k]._i][moves[k]._j].piece.color != this.color) {
					fill(168, 0, 0);
					rect(board.grid[di][dj].x, board.grid[di][dj].y, board.width, board.height);
					image(
						board.grid[di][dj].piece.img,
						board.grid[di][dj].x + board.width / 3,
						board.grid[di][dj].y + board.height / 4
					);
				}
			}
		}
	}
}

function mouseClicked() {
	if (moveLocked) {
		let from, to;
		for (let i = 0; i < board.grid.length; i++) {
			for (let j = 0; j < board.grid[i].length; j++) {
				if (board.grid[i][j].piece && board.grid[i][j].piece.locked) {
					from = { _i: i, _j: j };
				}
				if (mouseX >= board.grid[i][j].x && mouseX < board.grid[i][j].x + board.width) {
					if (mouseY >= board.grid[i][j].y && mouseY < board.grid[i][j].y + board.height) {
						to = { _i: i, _j: j };
					}
				}
			}
		}
		if (board.grid[from._i][from._j].piece.isValidMove(from._i, from._j, to)) {
			if (turn == 'white') {
				turn = 'black';
			} else {
				turn = 'white';
			}
			emit('end', {
				currentTurn: turn,
				player: currentPlayer,
				piece: board.grid[from._i][from._j].piece,
				move: {
					From: from,
					To: to
				}
			});
			return;
		}
	}
	moveLocked = !moveLocked;
	for (let i = 0; i < board.grid.length; i++) {
		for (let j = 0; j < board.grid[i].length; j++) {
			if (board.grid[i][j].piece) {
				board.grid[i][j].piece.locked = false;
			}
			if (mouseX >= board.grid[i][j].x && mouseX < board.grid[i][j].x + board.width) {
				if (mouseY >= board.grid[i][j].y && mouseY < board.grid[i][j].y + board.height) {
					if (board.grid[i][j].piece && board.grid[i][j].piece.color == turn) {
						board.grid[i][j].piece.locked = !board.grid[i][j].piece.locked;
						moveLocked = true;
						return;
					}
				}
			}
		}
	}
	if (moveLocked) moveLocked = !moveLocked;
}

function move(from, to) {
	let piece = board.grid[from._i][from._j].piece;
	let type = board.grid[from._i][from._j].type;
	board.grid[from._i][from._j].piece = null;
	board.grid[from._i][from._j].type = null;
	board.grid[to._i][to._j].piece = piece;
	board.grid[to._i][to._j].type = type;
	piece.locked = false;
	moveLocked = false;
}
