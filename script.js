let colors = ['red','orange', 'yellow', 'green','blue', 'indigo', 'violet']

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25);
}

function draw() {
  fill(random(colors));
  ellipse(mouseX, mouseY, 20, 20);
}

