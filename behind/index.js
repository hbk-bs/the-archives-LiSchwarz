const circleDiameter = 50;  
let circleX = 0;  
const circleSpeed = 4;  
let rectX = 225;  
let rectY = 190;  
let rectWidth = 200;  
let rectHeight = 200;  

function setup() {
  createCanvas(500, 500);
  noStroke(); 
}

function draw() {
  background(180, 15, 0);  
  
  fill(255, 0, 0); 
  rect(rectX, rectY, rectWidth, rectHeight);

  // Zeichne den Kreis, aber nur, wenn er sich **nicht** im Bereich des Vierecks befindet
  if (circleX + circleDiameter / 2 < rectX || circleX - circleDiameter / 2 > rectX + rectWidth) {
    fill(0, 0, 100);  
    ellipse(circleX, 360, circleDiameter, circleDiameter);  
  }

  // Kreis bewegt sich nach rechts
  circleX += circleSpeed;

  // Wenn der Kreis das Ende des Bildschirms erreicht hat, beginne wieder von links
  if (circleX > width) {
    circleX = -circleDiameter / 2;  // Startet den Kreis wieder von links
  }
}





