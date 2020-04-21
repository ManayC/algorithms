var fixedrect,movingrect,fixedrect1,fixedrect2,fixedrect3;






function setup() {
  createCanvas(1000,800);
 fixedrect= createSprite(200, 400, 50, 70);
 fixedrect.shapeColor="white";
 movingrect=createSprite(300,300,70,50);
 movingrect.shapeColor="white";
 fixedrect1= createSprite(400, 400, 50, 70);
 fixedrect1.shapeColor="white";
 fixedrect2= createSprite(600, 400, 50, 70);
 fixedrect2.shapeColor="white";
 fixedrect2.velocityX=2;
 fixedrect3= createSprite(800, 400, 50, 70);
 fixedrect3.shapeColor="white";
 fixedrect3.velocityX=-2;
}

function draw() {
movingrect.y=World.mouseY;
movingrect.x=World.mouseX;

if(isTouching(fixedrect1,movingrect)){
  fixedrect1.shapeColor="blue";
  movingrect.shapeColor="blue";
}else{
  fixedrect1.shapeColor="white";
  movingrect.shapeColor="white";
}

  bounceOff(fixedrect2,fixedrect3);
  background(0);  
  drawSprites();
}

  


