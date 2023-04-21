var s = 50; // cursor image size
var offset = 30;

let img;
let canvas;
let extraCanvas;
let button;


function preload() {
  img = loadImage('assets/doge_coin2.png');
  backdrop = loadImage('assets/backdrop.png');
}


function setup() {
  canvas = createCanvas(300, 200);
  canvas.parent('sketch-holder');

  extraCanvas = createGraphics((width - offset) * pixelDensity(), (height - offset) * pixelDensity());
  extraCanvas.parent('sketch-holder');

  resetSketch();

  button = createButton('reset');
  button.parent('sketch-holder');
  button.mousePressed(resetSketch);
  button.position(button.center('horizontal'), height + 25);

  noCursor();
}


function draw() {
  // trails
  if (mouseIsPressed && mouseButton === LEFT) { // Draws a continuous line.
    //blendMode(MULTIPLY);
    extraCanvas.strokeWeight(30);
    extraCanvas.stroke(255);
    extraCanvas.line(mouseX - offset / 2, mouseY - offset / 2, pmouseX - offset / 2, pmouseY - offset / 2);
  }

  // no trails
  //background(255);
  image(backdrop, 0, 0, width, height);
  image(extraCanvas, offset / 2, offset / 2, width - offset, height - offset);
  image(img, mouseX - s / 2, mouseY - s / 2, s, s);
}


function resetSketch() {
  background(255);
  extraCanvas.background(192);
}
