var s;
var s1,s2,s3;
var collectibles;
var spritesheet;
var fondo;
var animation;
var GRAVITY;
var galleta;

function preload(){
   //spritesheet = loadSpriteSheet('data/spritesheet.png', 264,264,10);
  animation= loadAnimation('data/lado/1.png', 'data/lado/12.png');
   galleta=loadImage('data/galleta/galleta01.png','data/galleta/galleta01.png');
  fondo= loadImage('data/backgrounds/espacio-01.png');
  
 //animationgameover =loadAnimation('data/lado/1.png', 'data/lado/12.png');
}

function setup() {
 createCanvas(800,600);
//GRAVITY = 0.3;

 
 s1= createSprite(width, 0.17*height,20,20);
 s1.addAnimation('galletas', animation);
 s1.debug =true;
 s1.mirrorX(-1);
 s1.velocity.x=-0.5;
 
 s2= createSprite(width, 0.5*height,20,20);
 s2.shapeColor= color(0,0,255);
 s2.debug =true;
 s2.velocity.x=-1;
 
 s3= createSprite(width, 0.85*height,20,20);
 s3.shapeColor= color(255,0,0);
 s3.debug =true;
 s3.velocity.x=-2;
 
 
 s= createSprite(0.1*width, 0.5*height, 264,264);
 s.shapeColor = color(255,0,0);
 s.scale = 2;
//s.velocity.x=0.5;

 s.addAnimation('caminar', animation);
 animation.frameDelay = 24;
// s.addAnimation('gameover',animaciongameover);
 //s.mirrorX(-1);
 s.setCollider('rectangle', 0,0,45,39);
 s.debug=true;
 
}
function draw() {
  background(fondo);
  fill(255);
  textAlign(CENTER);
  text("Press up and down", width/2, 20);
  if(s.displace(s1))
  s1.life=1;
  if(s.displace(s2))
  s2.life=1;
  if(s.displace(s3))
  s3.life=1;
  //s.displace(s1);
  //s.displace(s2);
  //s.displace(s3);
  //s1.overlap(s)
  //s2.overlap(s)
  //s3.overlap(s)

   //s.position.x = mouseX;
 // s.position.y = mouseY;
  //s.velocity.y = s.velocity.y + GRAVITY;

  
  if(keyWentDown("UP"))
    {
    s.position.y -= +200;
    }
  if(keyWentDown("DOWN"))
    {
    s.position.y -= -200;
    }
  if(s3.position.x < 0.01*width)
    s3.position.x = width;
    if(s2.position.x < 0.01*width)
    s2.position.x = width;
    if(s1.position.x < 0.01*width)
    s1.position.x = width;
  
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








