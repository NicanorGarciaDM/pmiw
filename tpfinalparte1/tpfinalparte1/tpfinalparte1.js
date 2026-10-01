var altura = 450
var ancho = 800
var contador = 0
var pantallaActual = 0
var pantallas = [
dibujarPantalla1, 
dibujarPantalla2
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
   if (mouseX > 300 && mouseX < 500 &&
      mouseY > 150 && mouseY < 300) {
    pantallaActual++;
  }
}
