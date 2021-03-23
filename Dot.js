class Dot {
	constructor(posX, posY, color, size) {
		this.posX = posX;
		this.posY = posY;
		this.color = color; 
		this.size = size;
	}

	draw() {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.posX, this.posY, this.size, 0, Math.PI * 2, true);
		ctx.fill();
	}

	update(array) {
		this.draw();
	}
}