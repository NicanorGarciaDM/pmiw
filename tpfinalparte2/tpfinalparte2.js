let juego;
let spriteJugador;
let spriteGuardia;

function preload() {
  spriteJugador = loadImage("jugador.png");
  spriteGuardia = loadImage("guardia.png");
}

function setup() {
  createCanvas(800, 400);
  juego = new Juego();
}

function draw() { }
