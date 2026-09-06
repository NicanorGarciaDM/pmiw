let imagenes = [];
let quieto = [];

let estado = "quieto";
let fotograma = 0;
let velocidad = 10;

function preload() {
  for (let i = 0; i < 3; i++) {
    imagenes[i] = loadImage("imagenes/frame" + (i + 1) + ".png");
  }

  quieto[0] = imagenes[0];
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);

  let animacionActual = elegirAnimacion(estado);

  mostrarAnimacion(animacionActual, 400, 300, 300);
}

function mostrarAnimacion(lista, x, y, tamaño) {
  if (frameCount % velocidad == 0) {
    fotograma = fotograma + 1;

    if (fotograma >= lista.length) {
      fotograma = 0;
    }
  }

  imageMode(CENTER);
  image(lista[fotograma], x, y, 64, 64);
}

function elegirAnimacion(estadoActual) {
  if (estadoActual == "quieto") {
    return quieto;
  } else {
    return imagenes;
  }
}

function cambiarEstado(nuevoEstado) {
  estado = nuevoEstado;
  fotograma = 0;
}

function keyPressed() {
  if (key == " ") {
    if (estado == "quieto") {
      cambiarEstado("animado");
    } else {
      cambiarEstado("quieto");
    }
  }

  if (key == "r" || key == "R") {
    cambiarEstado("quieto");
  }
}
