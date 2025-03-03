function setup() {
	colorMode(HSL, 360, 100, 100, 100);
	createCanvas(500, 500);
	background(170, 40, 30);
	noStroke();
	angleMode(DEGREES);

	const x = (n) => width * n;
	const y = (n) => height * n;
	const s = (n) => width * n;
	rectMode(CENTER);

	fill(170, 40, 20);
	rect(x(0), y(0.9), s(25), s(0.5));

	fill(170, 40, 10);
	ellipse(x(0.55), y(0.84), s(0.35), s(0.1));

	fill(10, 50, 60);
	rect(x(0.5), y(0.6), s(0.25), s(0.45));

	ellipse(x(0.5), y(0.825), s(0.25), s(0.1));

	fill(10, 50, 70);
	ellipse(x(0.5), y(0.375), s(0.25), s(0.1));

	fill(170, 40, 30);
	rect(x(0.5), y(0.55), s(0.25), s(0.1));

	fill(10, 50, 60);
	ellipse(x(0.5), y(0.5), s(0.25), s(0.09));

	fill(10, 50, 55);
	ellipse(x(0.5), y(0.6), s(0.25), s(0.09));
}

function draw() {}