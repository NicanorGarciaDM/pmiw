class Juego {  
  constructor() {
    this.fase = [];
    this.guardias = [];
    this.crearGuardias();
    this.crearJugador();
  }
}

dibujar() {
  this.Jugador.dibujar();
  for (let i=0, i<6, i++) {
    this.guardias[i].dibujar();
    }
  }
}

crearGuardias() {   
  this.guardias = [];
  for (let i=0, i<6, i++) {
    this.guardias[i] = new Guardia();
  }
}

crearJugador() {
  this.jugador = new Jugador();
}

victoria() {
}
