function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

var v = 20;

function draw() {
  background(255);

  for (var x = v; x < width; x += 5) {
    line(x, height / 2, x + 100, height / 2 - 75);
  }
  v += 2;
}
