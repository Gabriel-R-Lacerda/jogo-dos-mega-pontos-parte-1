var titulo, subtitulo, texto;
var brilho;
var grupo;
var mortes;
var paredes;
var inimigus;
var parede1, parede2, parede3, parede4, parede5, parede6, parede7, parede8;
function preload(){
    //carrega as imagens
    brilho = loadImage("a.png");


}
function setup() {
    createCanvas(windowWidth,windowHeight);
    //cria grupos
    paredes = new Group();
     
    inimigus = new Group();
    //cria a sprite
     sprite = createSprite(500, 500);
    //adiciona a imagem
    sprite.addImage(brilho);
    //define o tamanho
    sprite.scale = 0.1;
    //define tempo de vida
    sprite.lifetime = 20;
 mortes = 0;
 paredes = createGroup();
parede1 = createSprite(185,120,270,3);
paredes.add(parede1);
  parede2 = createSprite(190,160,190,3);
paredes.add(parede2);
  parede3 = createSprite(95,238,3,160);
paredes.add(parede3);
  parede4 = createSprite(50,220,3,200);
paredes.add(parede4);
  parede5 = createSprite(70,320,47,3);
paredes.add(parede5);
  parede6 = createSprite(285,238,3,160);
paredes.add(parede6);
  parede7 = createSprite(320,220,3,200);
paredes.add(parede7);
  parede8 = createSprite(300,320,43,3);
paredes.add(parede8);

  player = createSprite(70, 290, 13, 13);
player.shapeColor = "green";
  inimigus = createGroup();

  i1 = createSprite(150, 150, 13, 13);
i1.shapeColor = "red";
i1.velocityY = -1;
inimigus.add(i1);
  i2 = createSprite(240, 150, 13, 13);
i2.shapeColor = "red";
i2.velocityY = 1;
inimigus.add(i2);
  i3 = createSprite(55, 260, 13, 13);
i3.shapeColor = "red";
i3.velocityX = 1;
inimigus.add(i3);
  i4 = createSprite(55, 220, 13, 13);
i4.shapeColor = "red";
i4.velocityX = 1;
inimigus.add(i4);
  i5 = createSprite(55, 180, 13, 13);
i5.shapeColor = "red";
i5.velocityX = 1;
inimigus.add(i5);
  i6 = createSprite(300, 180, 13, 13);
i6.shapeColor = "red";
i6.velocityX = -1;
inimigus.add(i6);
  i7 = createSprite(300, 220, 13, 13);
i7.shapeColor = "red";
i7.velocityX = 1;
inimigus.add(i7);
  i7 = createSprite(300, 260, 13, 13);
i7.shapeColor = "red";
i7.velocityX = -1;
inimigus.add(i7);
}

function draw() {
    background("black");
    //códigos que serão executados ao longo de todo o jogo
fill("white");
  textSize(40);
  text("mortes" + mortes, 100, 50);
  if (player.isTouching(inimigus)) {
    player.x = 70;
    player.y = 290;
    mortes += 1;
  }
  if (player.isTouching(paredes)) {
    player.x = 70;
    player.y = 290;
    mortes += 1;
  }

    drawSprites();
}



function mouseReleased(){ 
    //soltou o mouse


}
