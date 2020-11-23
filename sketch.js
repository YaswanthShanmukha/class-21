var fixedRect, movingRect;
var ob1,ob2,ob3,ob4;
var obj2, obj1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ob1 = createSprite(200,100,50,50);
  ob1.shapeColor = "green";
  ob1.debug = true;

  ob2 = createSprite(300,100,50,50);
  ob2.shapeColor = "green";
  ob2.debug = true;

  ob3 = createSprite(400,100,50,50);
  ob3.shapeColor = "green";
  ob3.debug = true;

  ob4 = createSprite(500,100,50,50);
  ob4.shapeColor = "green";
  ob4.debug = true;

  obj2 = createSprite(680, 100, 50, 80);
  obj2.shapeColor = "green";
  obj2.debug = true;

  obj1 = createSprite(700, 400,80,30);
  obj1.shapeColor = "green";
  obj1.debug = true;

  obj1.velocityY = -5;
  obj2.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  ob4.x = World.mouseX;
  ob4.y = World.mouseY;
  

  if(isTouching(ob4,ob2) === true){
   ob4.shapeColor = "red";
    ob2.shapeColor = "red";
  }
  else{
    ob4.shapeColor = "green";
    ob2.shapeColor = "green";
  }

  bounceOff(obj2,obj1);

  drawSprites(); 
}
 