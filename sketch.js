var GAMESTATE = 1;
var PLAY = 1;
var END = 0 ;

var boy, boy_running, boy_collide; 
var ground,backgroundImg, backgroung;

function preload(){
  boy_running = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png","boy7.png","boy8.png","boy9.png","boy10.png","boy11.png","boy12.png");
  boy_collide = loadAnimation("boy1.png");

  backgroundImg = loadImage("background1.png");


}


function setup() {
  canvas = createCanvas(1500,650);

  backgroung = createSprite(750, 970);
  backgroung.addImage("groung",backgroundImg)
  backgroung.scale=1.2;

  
  boy = createSprite(200,300,20,50);
  boy.addAnimation("running",boy_running);
  boy.addAnimation("collided",boy_collide)
  boy.scale = 1;


  ground = createSprite(600,540,2000,10)
  ground.visible=false


  
}

function draw() {

  background(0); 

   

  if(keyDown("space") && boy.y >= 487) {
    boy.velocityY = -20;
  }

  boy.velocityY = boy.velocityY +1
  boy.changeAnimation("running",boy_running);

  if (backgroung.x < 0){
    backgroung.x = backgroung.width/4;
  }
  backgroung.velocityX = -6

  boy.collide(ground);
  
  drawSprites();
}



