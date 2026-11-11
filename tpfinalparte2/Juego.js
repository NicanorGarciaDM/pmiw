class Juego {  
  constructor() {
    this.fase = [];
    this.guardias = [];
    this.crearGuardias();
    this.crearJugador();
    this.contadorDeVidas = new ContadorVidas();
    this.contadorDeVueltas = new ContadorVueltas();
  }
  dibujar() {
    if (this.jugador.vida == 0) {
      this.derrota();
    } else if (this.contadorDeVueltas.vueltas >= 5) {
      this.victoria();
    } else {
      this.jugador.dibujar();
      if (keyIsDown(UP_ARROW)) {
        this.jugador.moverseArriba();
      }
      for (let i=0; i<this.guardias.length; i++) {
        this.guardias[i].dibujar();
      }
      if (keyIsDown(DOWN_ARROW)) {
        this.jugador.moverseAbajo();
      }  
      this.jugador.scrollingDerecha();
      this.detectarColisiones();
      this.contadorDeVidas.dibujar(this.jugador.vida);
      this.comprobarVuelta();
      this.contadorDeVueltas.dibujar();
    }
  }
  crearGuardias() {
    this.guardias = [];
    for (let i=0; i<4; i++) {
      let guardia = new Guardia();
      let hayEspacio = false;
      while (hayEspacio == false) {
        hayEspacio = true;
        for (let j=0; j<this.guardias.length; j++) {
          if (abs(guardia.posX - this.guardias[j].posX) < 100) {
            hayEspacio = false;
          }
        }
        if (hayEspacio == false) {
          guardia = new Guardia();
        }
      }
      this.guardias[i] = guardia;
    }
  }
  crearJugador() {
    this.jugador = new Jugador();
  }
  detectarColisiones() {
    for (let i=0; i<this.guardias.length; i++) {
      let guardia = this.guardias[i];
      if (guardia.colisiono == false &&
      this.jugador.posX < guardia.posX + 40 &&
      this.jugador.posX + 40 > guardia.posX &&
      this.jugador.posY < guardia.posY + 40 &&
      this.jugador.posY + 40 > guardia.posY) {
        this.jugador.vida -= 1;
        guardia.colisiono = true;
      }
    }
  }
  comprobarVuelta() {
    if (this.jugador.posX >= 800) {
      this.contadorDeVueltas.sumarVuelta();
      this.jugador.posX = 0;
      if (this.contadorDeVueltas.terminado() == false) {
        this.crearGuardias();
      }
    }
  }
  victoria() {
    background(0);
    fill(255);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("GANASTE!", width/2, height/2);
  }
  derrota() {
    background(0);
    fill(255);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("PERDISTE!", width/2, height/2);
  }
}
