class Juego {  
  constructor() {
    this.fase = [];
    this.guardias = [];
    this.crearGuardias();
    this.crearJugador();
  }
  dibujar() {
    this.jugador.dibujar();
    for (let i=0; i<6; i++) {
      this.guardias[i].dibujar();
    }
  }
  crearGuardias() {
    this.guardias = [];
  
    for (let i=0; i<6; i++) {
      let guardia = new Guardia();
      let hayEspacio = false;

      while (hayEspacio == false) {
        hayEspacio = true;

        for (let j=0; j<this.guardias.length; j++) {
          if (guardia.estaArriba == this.guardias[j].estaArriba &&
              abs(guardia.posX - this.guardias[j].posX) < 100) {
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
  victoria() {
  }
}
