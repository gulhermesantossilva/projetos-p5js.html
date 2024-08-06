let palavra;

function setup() {
  createCanvas(400, 400);

  palavra = palavraAleatoria();
}

function palavraAleatoria() {
  let palavras = ["Caminhante", "Caminho", "Caminha"];
  return random(palavras);
}

function inicializaCores() {
  background("blue");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function draw() {
  inicializaCores();

  let maximo = width;
  let minimo = 0;
  // mouseX, 0, width ==> 0, palavra.length

  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  //console.log(quantidade);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 200, 200);
}