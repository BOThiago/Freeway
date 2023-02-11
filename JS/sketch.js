function setup() {
  createCanvas(500, 400);
  //somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  movimentaAtor();
  mostraCarro();
  movimentaCarro();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}