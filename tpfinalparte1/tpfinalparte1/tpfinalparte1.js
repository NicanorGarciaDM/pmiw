var altura = 450
var ancho = 800
var pantallaActual = 0
var pantallas = [
dibujarMenu,
dibujarPantalla1, 
dibujarPantalla2,
dibujarCreditos
];

function setup() {
  createCanvas(ancho,altura);
  textSize(32);
  textAlign(CENTER, CENTER);
}


function draw() {
  background(220);
  pantallas[pantallaActual]();
}

function mousePressed() {
  if (pantallaActual == 0) {
    if (dentro(300, 150, 200, 70)) pantallaActual = 1; 
    if (dentro(300, 250, 200, 70)) pantallaActual = 3;
  }
  else if (pantallaActual == 1) {
    if (dentro(300, 150, 200, 150)) pantallaActual = 2;
  }
  else if (pantallaActual == 2) {
    if (dentro(300, 150, 200, 150)) pantallaActual = 0;
  }
  else if (pantallaActual == 3) {
    if (dentro(300, 350, 200, 60)) pantallaActual = 0;
  }
}

function dentro(x, y, w, h) {
  return mouseX > x && mouseX < x + w &&
         mouseY > y && mouseY < y + h;
}
