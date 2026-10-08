function dibujarMenu() {
  fill(0);
  text("El tesoro secreto del Tibet", ancho / 2, 70);

  fill(120);
  rect(300, 150, 200, 70);
  rect(300, 250, 200, 70);

  fill(0);
  text("Jugar", 400, 185);
  text("Créditos", 400, 285);
}

function dibujarPantalla1() {
  fill(120);
  rect(300, 150, 200, 150);
  fill(0);
  text("Pantalla 1", ancho / 2, 60);
}

function dibujarPantalla2() {
  fill(120);
  rect(300, 150, 200, 150);
  fill(0);
  text("Pantalla 2", ancho / 2, 60);
}

function dibujarCreditos() {
  fill(0);
  text("Creditos:", ancho / 2, 70);
  text("PMIW Comisión 4", ancho / 2, 110);
  text("PMIW \n Docente: \n Leonardo Garay", ancho / 2, 160);
  text ("Alumnos:", ancho /2, 240);
  text("\n Alumnos \n Nicanor Garcia \n Santiago Casado \n", ancho / 2, 280);

  fill(120);
  rect(300, 350, 200, 60);
  fill(0);
  text("Volver", 400, 380);
}
