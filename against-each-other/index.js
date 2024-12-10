const radius = 70;
let angle = 0;

function setup() {
  const canvas = createCanvas(500, 500);
  canvas.parent('sketch');
  background(255, 165, 0); 
  angleMode(DEGREES);
}

function draw() {
  background(80, 70, 220, 20);  
  
  strokeWeight(5);
  stroke(270); 
  fill(250, 20, 150); 

  push();
  translate(width / 2, height / 2);
  const x = radius * cos(angle);
  const y = radius * sin(angle);
  console.log({ x, y });

  ellipse(x, y, 30, 30); 
  angle += 245;  
  pop();
}


