function setup() {
	createCanvas(500, 500);
	colorMode(HSL, 360, 100, 100, 100);
	background(60, 40, 60);

	noStroke();

	x = (n) => width * n;
	const y = (n) => height * n;
	const s = (n) => width * n;
	rectMode(CENTER);

	fill(230, 50, 90);
	rect(x(0.7), y(0), s(0.9), s(1.5));

	fill(230, 50, 60, 80);
	ellipse(x(0.8), y(0.3), s(0.3), s(0.5));

	fill(230, 50, 60, 80);
	ellipse(x(0.8), y(0.8), s(0.4), s(0.5));

	fill(60, 40, 60);
	rect(x(0.7), y(1.1), s(2), s(0.7));

	fill(230, 50, 60);
	ellipse(x(0.2), y(0.6), s(0.5), s(0.9));
}