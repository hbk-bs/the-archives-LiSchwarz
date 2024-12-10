let circles = [];  
let numCircles = 200;  
let maxDiameter = 300;  
let minDiameter = 20;  
let targetX, targetY;  // Zielposition in der Mitte des Bildes
let currentCircle = 0;  

function setup() {
  createCanvas(500, 500);
  targetX = width / 1.05;  
  targetY = height / 1.5; 
  noStroke();

  // Initialisiere die Kreise
  for (let i = 0; i < numCircles; i++) {
    let diameter = random(minDiameter, maxDiameter);  // Zufälliger Durchmesser
    let xPos = (i % 2 === 0) ? -diameter : width + diameter;  // Von links oder rechts starten
    let speed = random(2, 7);  

    circles.push({
      x: xPos,
      y: targetY,
      diameter: diameter,
      color: color(random(40), random(70), random(255)),  
      speed: speed,
      moving: true,
    });
  }
}

function draw() {
  background(200,80,0);  

  // Bewege den aktuellen Kreis
  let circle = circles[currentCircle];
  
  if (circle.moving) {
    let targetPos = targetX - circle.diameter / 2;

    // Bewege den Kreis glatt auf die Zielposition
    if (circle.x < targetPos) {
      circle.x += circle.speed;  // Bewege nach rechts
      if (circle.x > targetPos) circle.x = targetPos;  // Korrigiere die Position, falls sie zu weit geht
    } else if (circle.x > targetPos) {
      circle.x -= circle.speed;  // Bewege nach links
      if (circle.x < targetPos) circle.x = targetPos;  // Korrigiere die Position, falls sie zu weit geht
    }

    // Wenn der Kreis die Mitte erreicht hat, stoppe die Bewegung
    if (circle.x === targetPos) {
      circle.moving = false;
    }
  }

  // Zeichne alle Kreise
  for (let i = 0; i < numCircles; i++) {
    fill(circles[i].color);  // Setze die zufällige Farbe
    ellipse(circles[i].x, circles[i].y, circles[i].diameter, circles[i].diameter);
  }

  // Wenn der aktuelle Kreis in der Mitte angekommen ist, starte den nächsten
  if (!circle.moving && currentCircle < numCircles - 1) {
    currentCircle++;  // Gehe zum nächsten Kreis
  }

  // Wenn alle Kreise in der Mitte sind, starte den Zyklus neu
  if (currentCircle === numCircles) {
    // Setze alle Kreise zurück und beginne den Zyklus von vorne
    for (let i = 0; i < numCircles; i++) {
      let diameter = random(minDiameter, maxDiameter);  // Neue zufällige Größe
      let xPos = (i % 2 === 0) ? -diameter : width + diameter;  // Startposition von der Seite
      circles[i].x = xPos;
      circles[i].diameter = diameter;
      circles[i].color = color(random(255), random(255), random(255));  // Neue zufällige Farbe
      circles[i].moving = true;  
    }
    currentCircle = 0;  // Setze den ersten Kreis auf den Start
  }
}




