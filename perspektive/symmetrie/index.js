function setup() {
	const canvas = createCanvas(500, 500);
	canvas.parent('sketch');
	background(255, 165, 0); 
	angleMode(DEGREES);
	noStroke();
	
	background("DarkKhaki");
	fill("Darkgreen");
	noStroke();
	circle(250, 250, 250);
	circle(475, 475, 250);
	circle(475, 25, 250);
	circle(25, 475, 250);
	circle(25, 25, 250);

	fill("darkred");
	circle(250, 250, 50);
	circle(475, 475, 50);
	circle(475, 25, 50);
	circle(25, 475, 50);
	circle(25, 25, 50);
}