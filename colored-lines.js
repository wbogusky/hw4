function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 400, 400, 100);
}

function draw() {
  background(100);

  for (var x = 10; x <= width-10; x += 40) {
    stroke(mouseX, mouseY, 100);
    line(x, height/2, mouseX, mouseY);
  }
}
