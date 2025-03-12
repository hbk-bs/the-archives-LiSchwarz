function setup() {
	const canvas = createCanvas(500, 500);
	canvas.parent('sketch');
	background(255, 165, 0); 
	angleMode(DEGREES);
	noStroke();
	
	background("darkolivegreen");

	fill("lightblue");
	rect(0, 0, 500, 150);

	fill("darkseagreen");
	rect(97.5, 350, 5, 150);

	fill("lightgoldenrodyellow");
	circle(100, 350, 50);

	fill("plum");
	ellipse(100, 285, 80, 80);

	fill("plum");
	ellipse(100, 415, 80, 80);

	fill("plum");
	ellipse(35, 350, 80, 80);

	fill("plum");
	ellipse(165, 350, 80, 80);

	fill("plum");
	ellipse(100, 285, 80, 80);

	fill("gray");
	triangle(40, 90, -20, 150, 150, 150);

	fill("darkgray");
	triangle(170, 100, 100, 150, 250, 150);

	fill("gray");
	triangle(400, 85, 300, 150, 550, 150);
}

function keyPressed() {
	if (key === "s") {
		save("perspective.png");
	}
}