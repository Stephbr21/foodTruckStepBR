/**
* @name Tree
* @extends
* @file Tree.js
* @author Add Your Name Here <addyouremail@gmail.com>
* @version 1.0.0
*/
class Tree {
	/**
	* @param {data type} name - description.
	*/
	constructor(position, width, height, fillColor, ctx) {

		this.direction = new Vector(-3, 0);
		this.position = position;
		this.width = width;
		this.height = height;
		this.fillColor = fillColor;
		this.ctx = ctx;
		this.render();
	}

	update() {
		this.render();
		this.position.add(this.direction);

		if ((this.position.x + this.width) <= 0) {
			this.position.x = window.innerWidth;
		}
	}

	render() {

		//Para hacer los árboles
		this.ctx.fillStyle = 'green';
		this.ctx.beginPath();
		this.ctx.arc((this.position.x - 40), (this.position.y - 19), 50, 0, (38 * Math.PI), false);
		this.ctx.fill();
		this.ctx.closePath();

		this.ctx.fillStyle = 'green';
		this.ctx.beginPath();
		this.ctx.arc((this.position.x + 50), (this.position.y - 19), 50, 0, (38 * Math.PI), false);
		this.ctx.fill();
		this.ctx.closePath();

		this.ctx.fillStyle = 'green';
		this.ctx.beginPath();
		this.ctx.arc((this.position.x + 5), (this.position.y - 68), 50, 0, (38 * Math.PI), false);
		this.ctx.fill();
		this.ctx.closePath();

		var building1 = Rectangle(this.position, this.width, this.height, true, this.fillColor, false, '', 0, this.ctx);
	}
}