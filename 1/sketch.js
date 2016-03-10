function setup() {
  createCanvas(400,400);
  
}

function draw() {
  background(255,0,0);
  fill(0);
  ellipse(mouseX, mouseY, 100, 100);
  fill(255);
  rect(mouseX, mouseY,50, 50);
}