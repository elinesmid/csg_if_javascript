function setup() {
  canvas = createCanvas(450,450);
  background('white');
  canvas.parent('processing');
  noLoop();
  colorMode(RGB,255,255,255,1);  
}

function draw() {
  noStroke();
  fill(70,130,180,0.3);

  rect(0,150,450,150);
  // de rode balk kan je niet zien, want die zit onder de andere 2 balken

  rect(0,0,150,450);
 
  rect(75,0,375,450);

  // cirkel
  noStroke();
  fill(70,130,180,0.3);
  ellipse(450,225,450);

  // driehoek
  noStroke();
  fill(70,130,180,0.3);
  triangle(450,225,225,450,225,0);
}