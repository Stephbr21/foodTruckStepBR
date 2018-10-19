/**
* @name Building
* @extends
* @file building.js
* @author Add Your Name Here <addyouremail@gmail.com>
* @version 1.0.0
*/
class Street {
	/**
	* @param {data type} name - description.
	*/
	constructor(position, width, height, fillColor, ctx) {

		this.direction = new Vector(-5, 0);
		this.position = position;
		this.width = width;
		this.height = height;
		this.fillColor = fillColor;
		this.ctx = ctx;
		this.render();
	}

	update() {
		this.render();
		//this.position.add(this.direction);

		if ((this.position.x + this.width) <= 0) {
			this.position.x = window.innerWidth;
		}
	}

	render() {	
		var building1 = Rectangle(this.position, this.width, this.height, true, this.fillColor, false, '', 0, this.ctx);
	
		this.ctx.fillStyle = 'rgba(255,255,255,0.5)';
		this.ctx.beginPath();
		this.ctx.fillRect(1,this.position.y - 315,3000,60);
		this.ctx.fill();
		this.ctx.closePath(); 

		 //Título del festival
		 this.ctx.fillStyle = 'white';
		 this.ctx.beginPath();
		 this.ctx.font = "normal 20PX PT Sans Narrow, sans-serif";
		 this.ctx.fillText("♨ FESTIVAL DE CARRITOS DE COMIDA",this.position.x + 80, this.position.y - 275);
		 this.ctx.closePath();
		 
		//Zacate
		this.ctx.fillStyle = '#85C673';
		this.ctx.beginPath();
		this.ctx.fillRect(1,this.position.y + 115,3000,600);
		this.ctx.fill();
		this.ctx.closePath(); 

		//Título de mi carrito
		this.ctx.fillStyle = 'white';
		this.ctx.beginPath();
		this.ctx.font = "normal 20PX PT Sans Narrow, sans-serif";
		this.ctx.fillText("FOOD TRUCK SWEETICE ",this.position.x + 38, this.position.y + 155);
		this.ctx.closePath();

		//Slogan
		this.ctx.fillStyle = 'white';
		this.ctx.beginPath();
		this.ctx.font = "normal 20PX Cedarville Cursive, cursive";
		this.ctx.fillText("¨Endulza tu alma¨",this.position.x + 30, this.position.y + 185);
		this.ctx.closePath();

		//Contacto
		this.ctx.fillStyle = 'white';
		this.ctx.beginPath();
		this.ctx.font = "normal 16PX PT Sans Narrow, sans-serif";
		this.ctx.fillText("@   sweetice@gmail.com",this.position.x + 40, this.position.y + 240);
		this.ctx.closePath();

		this.ctx.fillStyle = 'white';
		this.ctx.beginPath();
		this.ctx.font = "normal 14PX PT Sans Narrow, sans-serif";
		this.ctx.fillText("☎   8580-4267",this.position.x + 40, this.position.y + 260);
		this.ctx.closePath();

		//Lugares
		this.ctx.fillStyle = 'white';
		this.ctx.beginPath();
		this.ctx.font = "normal 14PX PT Sans Narrow, sans-serif";
		this.ctx.fillText("♥   Plaza del Sol - Tres Ríos",this.position.x + 40, this.position.y + 280);
		this.ctx.closePath();

		//Sabores
		this.ctx.fillStyle = 'white';
		this.ctx.beginPath();
		this.ctx.font = "normal 20PX PT Sans Narrow, sans-serif";
		this.ctx.fillText("SABORES: ",this.position.x + 295, this.position.y + 155);
		this.ctx.closePath();

		this.ctx.fillStyle = 'white';
		this.ctx.beginPath();
		this.ctx.font = "normal 16PX PT Sans Narrow, sans-serif";
		this.ctx.fillText("• BananAna ",this.position.x + 295, this.position.y + 185);
		this.ctx.closePath();

		this.ctx.fillStyle = 'white';
		this.ctx.beginPath();
		this.ctx.font = "normal 16PX PT Sans Narrow, sans-serif";
		this.ctx.fillText("• CocoLoco ",this.position.x + 295, this.position.y + 205);
		this.ctx.closePath();

		this.ctx.fillStyle = 'white';
		this.ctx.beginPath();
		this.ctx.font = "normal 16PX PT Sans Narrow, sans-serif";
		this.ctx.fillText("• MoraEnamora ",this.position.x + 295, this.position.y + 225);
		this.ctx.closePath();

		this.ctx.fillStyle = 'white';
		this.ctx.beginPath();
		this.ctx.font = "normal 16PX PT Sans Narrow, sans-serif";
		this.ctx.fillText("• Limonada ",this.position.x + 295, this.position.y + 245);
		this.ctx.closePath();
	
		this.ctx.fillStyle = 'white';
		this.ctx.beginPath();
		this.ctx.font = "normal 16PX PT Sans Narrow, sans-serif";
		this.ctx.fillText("• Uva-ula ",this.position.x + 295, this.position.y + 265);
		this.ctx.closePath();
	}

}