class ContadorVueltas {
  constructor() {
    this.vueltas = 0;
  }
  dibujar() {
    fill(0);
    textSize(20);
    text("Pantalla: " + (this.vueltas + 1) + "/5", 600, 30);
  }
  sumarVuelta() {
    this.vueltas++;
  }
  terminado() {
    return this.vueltas >= 5;
  }
}
