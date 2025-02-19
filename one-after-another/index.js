const numCircles = 5;  
const bounceHeight = 100;  
const rollSpeed = 7;  
const fallSpeed = 5;  
let circleX = [];  
let circleY = [];  
let circleState = [];  // Zustände der Kreise (0: warten, 1: fallen, 2: rollen)
let fallStartY = 100;  
let currentCircle = 0;  // Beginne mit dem ersten Kreis, der fällt

function setup() {
  createCanvas(500, 500);
  noStroke();

  for (let i = 0; i < numCircles; i++) {
    circleX[i] = 100 + i * 80;  // Startposition in einer Linie (horizontal)
    circleY[i] = fallStartY;  // Alle Kreise starten oben
    circleState[i] = 0;  // Alle Kreise starten im "warten" Zustand
  }
}

function draw() {
  background(100, 70, 255);  

  for (let i = 0; i < numCircles; i++) {
    fill(120, 10, 20);  
    ellipse(circleX[i], circleY[i], 30, 30);  

    // Fallbewegung:
    if (circleState[i] === 1) {
      circleY[i] += fallSpeed;  // Der Kreis fällt nach unten
      if (circleY[i] >= height * 0.75) {  // Wenn der Kreis den neuen Boden erreicht hat (75% der Höhe)
        circleState[i] = 2;  // Ändere den Zustand zu "rollen"
      }
    }

    // Rollbewegung:
    if (circleState[i] === 2) {
      circleX[i] += rollSpeed;  // Der Kreis bewegt sich nach rechts
      if (circleX[i] >= width) {  // Wenn der Kreis den rechten Rand erreicht
        circleState[i] = 0;  // Ändere den Zustand zu "warten"
        if (i === numCircles - 1) {  // Wenn der letzte Kreis den rechten Rand erreicht hat
          // Setze alle Kreise zurück nach oben
          for (let j = 0; j < numCircles; j++) {
            circleY[j] = fallStartY;  // Starthöhe
            circleX[j] = 100 + j * 80;  // Anfangsposition 
          }
          currentCircle = 0;  // Der erste Kreis beginnt erneut zu fallen
        } else {
          currentCircle = i + 1;  // Der nächste Kreis beginnt zu fallen
        }
      }
    }
  }

  // Wenn der aktuelle Kreis noch nicht gefallen ist, beginne zu fallen
  if (circleState[currentCircle] === 0) {
    circleState[currentCircle] = 1;  // Der Kreis beginnt zu fallen
  }
}







