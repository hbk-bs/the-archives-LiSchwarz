const circleDiameter = 50;  
let circleX = 0;  
const circleSpeed = 4;  
let rectX = 225;  
let rectY = 190;  
let rectWidth = 200;  
let rectHeight = 200;  

function setup() {
  const canvas = createCanvas(500, 500);
  canvas.parent('sketch');
  background(255, 165, 0); 
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  background(180, 15, 0);  
  
  fill(255, 15, 0); 
  rect(rectX, rectY, rectWidth, rectHeight);  

  fill(0, 0, 100);  
  ellipse(circleX, 360, circleDiameter, circleDiameter);

  if (circleX + circleDiameter / 2 > rectX && circleX - circleDiameter / 2 < rectX + rectWidth && 
      360 + circleDiameter / 2 > rectY && 360 - circleDiameter / 2 < rectY + rectHeight) {
    fill(255, 15, 0);
    rect(rectX, rectY, rectWidth, rectHeight);
  }

  circleX += circleSpeed;

  if (circleX > width) {
    circleX = -circleDiameter / 2; 
  }
}
