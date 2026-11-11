class ContadorVidas {
  constructor() {
    this.posX = 20;
    this.posY = 30;
  }

  dibujar(vida) {
    fill(0);
    textSize(20);
    text("Vidas: " + vida, this.posX, this.posY);
  }
}
