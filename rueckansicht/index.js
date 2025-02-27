function setup() {
	createCanvas(500, 500);
	colorMode(HSL, 360, 100, 100, 100);
	background(140, 40, 30);

	noStroke();
	const x = (n) => width * n;
	const y = (n) => height * n;
	const s = (n) => width * n;
	rectMode(CENTER);

	fill(230, 40, 10);
	push();
	translate(width / 2, height / 2);
	triangle(-250, 250, 0, 0, 250, 250);
	pop();

	fill(230, 50, 60);
	rect(x(0), y(0), s(5), s(1.3));

	fill(80, 50, 60);
	circle(x(0.5), y(0.4), s(0.4));

	fill(240, 80, 80);
	rect(x(0.5), y(0.6), s(0.55), s(0.35));
}
