function setup() {
	const canvas = createCanvas(500, 500);
	canvas.parent('sketch')
	createCanvas(500, 500);
	background("maroon");
	stroke("firebrick");
	fill("lavender");

	strokeWeight(0.1);
	line(0, 0, 500, 500);
	line(0, 500, 500, 0);

	fill("chocolate");
	rect(0, 250, 500, 250);

	fill("steelblue");
	noStroke();
	rect(0, 240, 80, 200);
	rect(420, 240, 80, 200);
	rect(120, 180, 40, 150);
	rect(340, 180, 40, 150);

	fill("firebrick");
	circle(250, 250, 50);
}