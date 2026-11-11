class Jugador {
  constructor() {
    this.posX = 50;
    this.posY = 300;
    this.vida = 3;
    this.sprite = spriteJugador;
  }
  dibujar() {
    image(this.sprite, this.posX, this.posY, 50, 50);
  }
  moverseArriba() {
    this.posY = 200
  }
  moverseAbajo() {  
    this.posY = 300
  }
  scrollingDerecha() {
    this.posX += 2;
  }
}
