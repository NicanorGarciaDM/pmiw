class Guardia {
  constructor() {
    this.posX = random(150, 600);
    this.posY;
    this.sprite = spriteGuardia;
    this.estaArriba = random([true, false]);
    if (this.estaArriba == true) {
      this.posY = 200;
    } else {
      this.posY = 400;
    }
  }
}

dibujar() {
  image(this.sprite, this.posX, this.posY, 50, 50);
}

estaMuerto() {
}

moverse() {
}
