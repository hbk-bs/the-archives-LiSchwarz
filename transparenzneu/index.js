function setup() {
	colorMode(HSL, 360, 100, 100, 100);
	createCanvas(500, 500);
	background(270, 20, 40);
	noStroke();
	const step = 25;

	let x = 0;
	let l = 0;

	for (let x = step; x < width; x =x + step) {
	for (let y = step; y < height; y *= 1.2) {
	fill(random(230, 200), 50, 50, random(30));
		console.log({ x, y });
		circle(x, y, random (step,70));

	for (let x = step; x < width; x = x + step) {
		for (let y = step; y < height; y = y + step) {
	fill(random(230, 200), 50,20);
		console.log({ x, y });
		circle(x, y, random (step, 70));
	}
}
}
	}	

	function draw() {}
}
