var altura = 450
var ancho = 800
var pantallaActual = 0
var pantallas = [
dibujarMenu,
dibujarPantalla1, 
dibujarPantalla2,
dibujarPantalla3,
dibujarPantalla4a,
dibujarPantalla4b,
dibujarPantalla5a,
dibujarPantalla5b,
dibujarPantalla6,
dibujarPantalla7,
dibujarPantalla8a,
dibujarPantalla8b,
dibujarEndingNeutro,
dibujarPantalla9,
dibujarPantalla10,
dibujarPantalla11,
dibujarPantalla12,
dibujarPantalla13,
dibujarPantalla14a,
dibujarPantalla14b,
dibujarEndingBueno,
dibujarEndingMalo,
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
    if (dentro(300, 250, 200, 70)) pantallaActual = 22;
  }
  else if (pantallaActual == 1) {
    if (dentro(300, 150, 200, 150)) pantallaActual = 2;
  }
  else if (pantallaActual == 2) {
    if (dentro(300, 150, 200, 150)) pantallaActual = 3;
  }
  else if (pantallaActual == 3) {
    if (dentro(150, 250, 200, 70)) pantallaActual = 4;   // 4a
    if (dentro(450, 250, 200, 70)) pantallaActual = 5;   // 4b
  }
  else if (pantallaActual == 4) {
    if (dentro(300, 150, 200, 150)) pantallaActual = 6;
  }
  else if (pantallaActual == 5) {
    if (dentro(300, 150, 200, 150)) pantallaActual = 7;
  }
  else if (pantallaActual == 6 || pantallaActual == 7) {
    if (dentro(300,150,200,150)) pantallaActual = 8;
  }
  else if (pantallaActual == 8)  {
    if (dentro(300, 150, 200, 150)) pantallaActual = 9;
  }
  else if (pantallaActual == 9) {
    if (dentro(150, 250, 200, 70)) pantallaActual = 10; //8a
    if (dentro(450, 250, 200, 70)) pantallaActual = 11; //8b
  }
  else if (pantallaActual == 10) {
    if (dentro(300, 150, 200, 150)) pantallaActual = 13;
  }
  else if (pantallaActual == 11) {
    if (dentro(300, 150, 200, 150)) pantallaActual = 12;
  }
  else if (pantallaActual == 12 || pantallaActual == 20 || pantallaActual == 21) {
    if (dentro(300, 150, 200, 150)) pantallaActual = 0;
  }
  else if (pantallaActual == 13) {
    if (dentro(300, 150, 200, 150)) pantallaActual = 14;
  }
  else if (pantallaActual == 14) {
    if (dentro(300, 150, 200, 150)) pantallaActual = 15;
  }
  else if (pantallaActual == 15) {
    if (dentro(300, 150, 200, 150)) pantallaActual = 16;
  }
  else if (pantallaActual == 16) {
    if (dentro(300, 150, 200, 150)) pantallaActual = 17;
  }
  else if (pantallaActual == 17) {
    if (dentro(150, 250, 200, 70)) pantallaActual = 18; //14a
    if (dentro(450, 250, 200, 70)) pantallaActual = 19; //14b
  }
  else if (pantallaActual == 18) {
    if (dentro(300, 150, 200, 150)) pantallaActual = 20;
  }
  else if (pantallaActual == 19) {
    if (dentro(300, 150, 200, 150)) pantallaActual = 21;
  }
  else if (pantallaActual == 22) {
    if (dentro(300, 350, 200, 60)) pantallaActual = 0;
  }
}

function dentro(x, y, w, h) {
  return mouseX > x && mouseX < x + w &&
         mouseY > y && mouseY < y + h;
}
