let juego;
let spriteJugador;
let spriteGuardia;

function preload() {
  spriteJugador = loadImage("assets/jugador.png");
  spriteGuardia = loadImage("assets/guardia.png");
}

function setup() {
  createCanvas(800, 400);
  juego = new Juego();
}

function draw() {
  background(220);
  juego.dibujar();
}
