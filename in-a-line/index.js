const numCircles = 15;  
const bounceHeight = 50;  
const waitTime = 1; 
let circleY = [];
let circleState = [];  
let startTime = 0; 
let currentCircle = 0; 

function setup() {
  const canvas = createCanvas(500, 500);
  canvas.parent('sketch');
  background(255, 165, 0);  
  angleMode(DEGREES);

  for (let i = 0; i < numCircles; i++) {
    circleY[i] = height / 2;  // Alle Kreise starten in der Mitte der Y-Achse
    circleState[i] = 0;  // Alle Kreise starten im "warten" Zustand
  }
}

function draw() {
  background(200, 60, 200, 50);  

  strokeWeight(0);
  stroke(270);  
  fill(50, 0, 150); 

  // Überprüfen, ob der aktuelle Kreis hüpfen sollte
  for (let i = 0; i < numCircles; i++) {
    const x = width / (numCircles + 1) * (i + 1);  // Positioniere die Kreise gleichmäßig auf der X-Achse

    // Wenn der Kreis im "Hüpfen"-Zustand ist, bewege ihn
    if (circleState[i] == 1) {
      circleY[i] -= 5;  // Der Kreis bewegt sich nach oben (nach oben springen)
      if (circleY[i] <= height / 2 - bounceHeight) {  // Wenn der Kreis den höchsten Punkt erreicht hat
        circleState[i] = -1;  // Ändere den Zustand zu "fallen"
      }
    }

    // Wenn der Kreis im "Fallen"-Zustand ist, bewege ihn nach unten
    if (circleState[i] == -1) {
      circleY[i] += 5;  // Der Kreis fällt nach unten
      if (circleY[i] >= height / 2) {  // Wenn der Kreis wieder unten angekommen ist
        circleState[i] = 0;  // Ändere den Zustand zu "warten"
      }
    }

    ellipse(x, circleY[i], 30, 30);
  }

  if (circleState[currentCircle] == 0 && frameCount >= startTime) {
    circleState[currentCircle] = 1;  
    startTime = frameCount + waitTime;  
    currentCircle = (currentCircle + 1) % numCircles;  
  }
}
