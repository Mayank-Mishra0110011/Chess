class Board {
	constructor(width, height, topColor) {
		this.width = width / 8;
		this.height = height / 8;
		this.grid = new Array(8).fill().map(() => new Array(8));
		this.mirror = false;
		let topPiece;
		if (topColor) {
			this.mirror = true;
			if (topColor == 'black') {
				topPiece = pieces.black;
			} else {
				topPiece = pieces.white;
			}
		} else {
			topPiece = Math.random() > 0.5 ? pieces.black : pieces.white;
		}
		let bottomPiece;
		if (topPiece == pieces.black) {
			bottomPiece = pieces.white;
		} else {
			bottomPiece = pieces.black;
		}
		currentPlayer = bottomPiece == pieces.white ? 'white' : 'black';
		for (let i = 0; i < this.grid.length; i++) {
			for (let j = 0; j < this.grid[i].length; j++) {
				if (j == 1) {
					this.grid[i][j] = {
						x: i * width / 8,
						y: j * height / 8,
						piece: topPiece.pawn(),
						type: 'topPiece'
					};
				} else if (j == 6) {
					this.grid[i][j] = {
						x: i * width / 8,
						y: j * height / 8,
						piece: bottomPiece.pawn(),
						type: 'bottomPiece'
					};
				} else if (j == 0) {
					if (i == 0 || i == 7) {
						this.grid[i][j] = {
							x: i * width / 8,
							y: j * height / 8,
							piece: topPiece.rook(),
							type: 'topPiece'
						};
					} else if (i == 1 || i == 6) {
						this.grid[i][j] = {
							x: i * width / 8,
							y: j * height / 8,
							piece: topPiece.knight(),
							type: 'topPiece'
						};
					} else if (i == 2 || i == 5) {
						this.grid[i][j] = {
							x: i * width / 8,
							y: j * height / 8,
							piece: topPiece.bishop(),
							type: 'topPiece'
						};
					} else if (i == 3) {
						this.grid[i][j] = {
							x: i * width / 8,
							y: j * height / 8,
							piece: topPiece.queen(),
							type: 'topPiece'
						};
					} else if (i == 4) {
						this.grid[i][j] = {
							x: i * width / 8,
							y: j * height / 8,
							piece: topPiece.king(),
							type: 'topPiece'
						};
					}
				} else if (j == 7) {
					if (i == 0 || i == 7) {
						this.grid[i][j] = {
							x: i * width / 8,
							y: j * height / 8,
							piece: bottomPiece.rook(),
							type: 'bottomPiece'
						};
					} else if (i == 1 || i == 6) {
						this.grid[i][j] = {
							x: i * width / 8,
							y: j * height / 8,
							piece: bottomPiece.knight(),
							type: 'bottomPiece'
						};
					} else if (i == 2 || i == 5) {
						this.grid[i][j] = {
							x: i * width / 8,
							y: j * height / 8,
							piece: bottomPiece.bishop(),
							type: 'bottomPiece'
						};
					} else if (i == 3) {
						this.grid[i][j] = {
							x: i * width / 8,
							y: j * height / 8,
							piece: bottomPiece.queen(),
							type: 'bottomPiece'
						};
					} else if (i == 4) {
						this.grid[i][j] = {
							x: i * width / 8,
							y: j * height / 8,
							piece: bottomPiece.king(),
							type: 'bottomPiece'
						};
					}
				} else {
					this.grid[i][j] = {
						x: i * width / 8,
						y: j * height / 8,
						piece: null,
						type: null
					};
				}
			}
		}
	}
	drawPieces() {
		for (let i = 0; i < this.grid.length; i++) {
			for (let j = 0; j < this.grid[i].length; j++) {
				let v;
				if (i % 2 === 0) {
					if (j % 2 === 0) {
						v = 255;
					} else {
						v = color(75, 54, 33);
					}
				} else {
					if (j % 2 === 0) {
						v = color(75, 54, 33);
					} else {
						v = 255;
					}
				}
				fill(v);
				if (this.grid[i][j].piece) {
					if (mouseX >= this.grid[i][j].x && mouseX < this.grid[i][j].x + this.width) {
						if (mouseY >= this.grid[i][j].y && mouseY < this.grid[i][j].y + this.height) {
							if (this.grid[i][j].piece.color == turn && currentPlayer == turn) {
								fill(207, 167, 110);
								noStroke();
								rect(this.grid[i][j].x, this.grid[i][j].y, this.width, 10);
								rect(this.grid[i][j].x, this.grid[i][j].y, 10, this.height);
								rect(this.grid[i][j].x + this.width - 10, this.grid[i][j].y, 10, this.height);
								rect(this.grid[i][j].x, this.grid[i][j].y + this.height - 10, this.width, 10);
								stroke(0);
								image(
									this.grid[i][j].piece.img,
									this.grid[i][j].x + this.width / 3,
									this.grid[i][j].y + this.height / 4
								);
								this.grid[i][j].piece.showMoves(i, j);
								continue;
							}
						}
					}
					if (this.grid[i][j].piece.locked && this.grid[i][j].piece.color == turn) {
						fill(207, 167, 110);
						noStroke();
						rect(this.grid[i][j].x, this.grid[i][j].y, this.width, 10);
						rect(this.grid[i][j].x, this.grid[i][j].y, 10, this.height);
						rect(this.grid[i][j].x + this.width - 10, this.grid[i][j].y, 10, this.height);
						rect(this.grid[i][j].x, this.grid[i][j].y + this.height - 10, this.width, 10);
						stroke(0);
						image(
							this.grid[i][j].piece.img,
							this.grid[i][j].x + this.width / 3,
							this.grid[i][j].y + this.height / 4
						);
						this.grid[i][j].piece.showMoves(i, j);
					}
					image(
						this.grid[i][j].piece.img,
						this.grid[i][j].x + this.width / 3,
						this.grid[i][j].y + this.height / 4
					);
				}
			}
		}
	}
	drawBoard() {
		for (let i = 0; i < this.grid.length; i++) {
			for (let j = 0; j < this.grid[i].length; j++) {
				if (i % 2 === 0) {
					if (j % 2 === 0) {
						if (this.mirror) {
							fill(75, 54, 33);
						} else {
							fill(255);
						}
					} else {
						if (this.mirror) {
							fill(255);
						} else {
							fill(75, 54, 33);
						}
					}
				} else {
					if (j % 2 === 0) {
						if (this.mirror) {
							fill(255);
						} else {
							fill(75, 54, 33);
						}
					} else {
						if (this.mirror) {
							fill(75, 54, 33);
						} else {
							fill(255);
						}
					}
				}
				rect(this.grid[i][j].x, this.grid[i][j].y, this.width, this.height);
			}
		}
	}
}
