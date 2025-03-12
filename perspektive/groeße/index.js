function setup() {
	const canvas = createCanvas(500, 500);
	canvas.parent('sketch');
	background(255, 165, 0); 
	angleMode(DEGREES);
	background("darkolivegreen");
	noStroke();

	fill("orange");
	rect(100, 50, 380, 450);

	fill("midnightblue");
	circle(60, 485, 30);
}