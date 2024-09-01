// video: https://youtu.be/aa5151PgYfQ

let imagenOptica;
let vertices = [
  [442, 389, 791, 353, 755, 7, 407, 44],
  [491, 378, 776, 304, 701, 20, 418, 93],
  [544, 356, 754, 250, 647, 41, 439, 147],
  [596, 319, 714, 195, 591, 76, 473, 201],
  [626, 281, 675, 168, 561, 116, 509, 229],
  [634, 249, 643, 159, 552, 149, 542, 238],
  [570, 234, 630, 219, 614, 162, 555, 176],
  [597, 224, 619, 194, 590, 172, 566, 201],
  [600, 212, 608, 188, 585, 181, 576, 203],
  [584, 204, 600, 203, 600, 189, 584, 189],
];
  
function preload() {
  imagenOptica = loadImage("/data/imagen_tp3.jpg");
}

function setup() {
  createCanvas(800, 400);
  imagenOptica.resize(400,400);
  image(imagenOptica, 0, 0);
}

function draw() {
  noStroke();
  fill("#1a1a1a");
  rect(400, 0, 400, 400);
  fill("#000000");
  
  if (keyIsPressed) {
    cambiarColores(vertices);
  }
}

function cambiarColores(vertices) {
  for (let i = 0; i < vertices.length; i++) {
    fill(random(255), random(255), random(255));
    quad(vertices[i][0], vertices[i][1], vertices[i][2], vertices[i][3], vertices[i][4], vertices[i][5], vertices[i][6], vertices[i][7]);
  }
}
