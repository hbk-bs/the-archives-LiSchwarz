function setup() {
	const canvas = createCanvas(500, 500);
	canvas.parent('sketch');
	background(255, 165, 0); 
	angleMode(DEGREES);
	noStroke();
	background("darkslateblue");

	fill("orange");
	rect(50, 80, 70, 110);

	fill("indianred");
	rect(250, 80, 50, 110);

	fill("firebrick");
	rect(150, 120, 350, 110);

	fill("darkred");
	rect(250, 120, 50, 50);

	stroke(50);
	strokeWeight(10);
	stroke("darkorange");
	fill(0, 0);
	circle(450, 450, 500);
}
