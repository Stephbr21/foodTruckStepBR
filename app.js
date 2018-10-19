/**
* @name app.js
* @file Add a small description for this file.
* @author Add Your Name Here <addyouremail@gmail.com>
* @version 1.0.0
*/

window.addEventListener('load', init, false);

function init() {
	console.log('Game running!');

	//Add Stats
	var stats = new Stats();
	stats.showPanel(0);
	document.body.appendChild(stats.dom);

	var canvas = document.createElement('canvas');
	canvas.width = innerWidth;
	canvas.height = innerHeight;
	canvas.style.backgroundColor = window.colors.aqua;
	canvas.style.position = 'absolute';
	canvas.style.top = '0px';
	document.body.appendChild(canvas);
	var ctx = canvas.getContext('2d');

	var pool = [];
	var requestId;

	var tree1 = new Tree(new Vector(-240, 250), 10, 190, '#534040', ctx);
	pool.push(tree1);

	var tree1 = new Tree(new Vector(490, 210), 10, 190, '#534040', ctx);
	pool.push(tree1);


	var tree1 = new Tree(new Vector(199, 140), 10, 210, '#534040', ctx);
	pool.push(tree1);

	var street = new Street(new Vector(0, innerHeight / 2), innerWidth, 350, '#ACA6A7', ctx);
	pool.push(street);

	var truckPosition = new Vector();
	truckPosition.x = (innerWidth / 2) - 115;
	truckPosition.y = (innerHeight / 2) - 115;
	var truck = new Truck(truckPosition, ctx);
	pool.push(truck);


	function update() {
		stats.begin();

		//Add here your game code that needs to be update every frame.
		stats.end();

		ctx.clearRect(0, 0, innerWidth, innerHeight);
		pool.forEach(object => {
			object.update();
		});

		requestId = requestAnimationFrame(update);
	}

	update();

	window.addEventListener('resize', () => {
		var truckPosition = new Vector();
		truckPosition.x = (innerWidth / 2) - 115;
		truckPosition.y = (innerHeight / 2) - 115;
		truck.position = truckPosition;

		canvas.width = innerWidth;
		canvas.height = innerHeight;
	})
}