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
  
  fill(255, 15, 0); 
  rect(rectX, rectY, rectWidth, rectHeight);  
  
  // Kreis wird immer gezeichnet
  fill(0, 0, 100);  
  ellipse(circleX, 360, circleDiameter, circleDiameter);

  // Wenn der Kreis sich im Bereich des Rechtecks befindet, zeichne eine "Maske" über dem Kreis
  if (circleX + circleDiameter / 2 > rectX && circleX - circleDiameter / 2 < rectX + rectWidth && 
      360 + circleDiameter / 2 > rectY && 360 - circleDiameter / 2 < rectY + rectHeight) {
    fill(255, 15, 0);
    rect(rectX, rectY, rectWidth, rectHeight);
  }

  // Kreis bewegt sich nach rechts
  circleX += circleSpeed;

  // Wenn der Kreis das Ende des Bildschirms erreicht hat, beginne wieder von links
  if (circleX > width) {
    circleX = -circleDiameter / 2;  // Startet den Kreis wieder von links
  }
}




