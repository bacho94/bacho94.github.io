
var s;
var fondo;
var animation;
//var myFont;

function preload(){
  animation= loadAnimation('data/frente/1.png', 'data/frente/12.png');

  fondo= loadImage('data/backgrounds/ini-fin-01.png');
   //myFont = loadFon('data/fonts/badonk-a-donk2.otf');
  }

function setup() {
 createCanvas(800,600);
  
//GRAVITY = 0.3;

 s= createSprite(0.1*width, 0.8*height, 264,264);
 s.shapeColor = color(255,0,0);
 s.scale = 2;

 s.addAnimation('caminar', animation);
 animation.frameDelay = 60;
// s.addAnimation('gameover',animaciongameover);
 //s.mirrorX(-1);
 s.setCollider('rectangle', 0,0,45,39);
 s.debug=false;
 
}
function draw() {
  background(fondo);
 fill(0);
  //textFont(myfont);
  textSize(36);
  textAlign(CENTER);
  text("!PERRO COME GALLETAS¡", width/2, 40);
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("¿Como Jugar?", 70, 70);
  
  drawSprites();
 
}
//function keyPressed(){
  //if(keyCode(UP_ARROW)) {
    // s.position.y = s.position.y +50;
    //{ if(keyCode(DOWN_ARROW))
    //s.position.y = s.position.y -50;
//}
 // return false;
  
  //}
//}

//function keyDown(){
  // if(keyDown(UP_ARROW)) {
    //s.position.y = s.position.y +10;
     //if(keyDown(DONW_ARROW))
    //s.position.y = s.position.y -10;
//}








