var sea,ship;
var seaImg1,shipImg2;

function preload(){
  //uncomment the code to add animation to ship 

  shipImg1 = loadImage("ship-1.png");
  shipImg2 = loadImage("ship-2.png");
  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(100,200,30,20);
  ship.addAnimation("movingship",shipImg1,shipImg2);
  ship.scale=0.3;
}

function draw() {
  background(0);
  sea.velocityX = -3;

  //uncomment code to reset the background
  if(sea.x < 0){
    sea.x = sea.width/8;
  }

 
  drawSprites();
}