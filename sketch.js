var s = 50; // image size
var offset = 30;
let img;
let canvas;
let extraCanvas;
let button;


function preload() {
  img = loadImage('assets/doge_coin2.png');
}


function setup() {
  canvas = createCanvas(300, 200);
  canvas.parent('sketch-holder');
  pixelDensity(1);


  extraCanvas = createGraphics(width - offset, height - offset);
  extraCanvas.parent('sketch-holder');

  //extraCanvas.background(255, 80, 25);
  //extraCanvas.clear();

  //background(0, 80, 25);
  resetSketch();

  button = createButton('reset');
  button.parent('sketch-holder');
  button.mousePressed(resetSketch);
  button.position(button.center('horizontal'), height + 25);
  //cursor(CROSS);

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
  background(255);
  image(extraCanvas, offset / 2, offset / 2);
  image(img, mouseX - s / 2, mouseY - s / 2, s, s);

}


function resetSketch() {
  //clear();
  background(255);
  extraCanvas.background(192);
}
