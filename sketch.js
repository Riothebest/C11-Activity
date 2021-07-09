var trex, trexImg;
var ground, groundImg;
var edges;
var invisground;

function preload()
{
  groundImg = loadImage("ground2.png");
   trexImg = loadAnimation("trex1.png", "trex3.png", "trex4.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
   trex = createSprite(120, 130, 20, 40); 
   trex.addAnimation("t",trexImg);
   trex.scale = 0.5;

   //creating The Ground
  ground = createSprite(300,160,600,10);
  ground.addImage(groundImg);
  //ground.shapeColor = "brown";

  invisground = createSprite(300,180,600,10);
  invisground.shapeColor = "210";
  invisground.visible = false;

   edges = createEdgeSprites();
}

function draw(){
  background(210);
  
  textSize(15);
  fill("white");
  text(mouseX + "," + mouseY, mouseX, mouseY);

  ground.velocityX = -9;
  console.log(ground.x);
  
  //reset the ground
  if(ground.x < 0 ){
    //ground.x = 300;
    ground.x = ground.width/2;
  }

  //if(trex.collide(invisground)){
    if(keyWentDown("space") && trex.y>=148)
    {
      trex.velocityY = -12;
    }
    console.log(trex.y);
  //}

  //gravity logic
  trex.velocityY = trex.velocityY + 1

  trex.collide(invisground);

  //stop the trex to fall off 
  trex.collide(edges[3]);
  
  

  drawSprites();

}
