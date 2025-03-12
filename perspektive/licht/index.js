function setup() {
	const canvas = createCanvas(500, 500);
	canvas.parent('sketch');
	background(255, 165, 0); 
	angleMode(DEGREES);
	noStroke();
	background("midnightblue");

	noStroke();

	fill("orange");
	triangle(-10, 0, 50, 70, 50, 0);

	fill("midnightblue");
	triangle(-10, 70, 0, 0, 0, 0);

	fill("maroon");
	circle(430, 350, 220);

	fill("darkred");
	circle(400, 330, 80);

	fill("indianred");
	circle(380, 300, 50);

	fill("lemonchiffon");
	circle(345, 335, 15);
}
