var canvas;
var music;
var Purple,Green,Yellow,Blue;
var Ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);
Purple= createSprite(527,590,140,20);
Green= createSprite(527-150,590,140,20);
  Yellow= createSprite(527-300,590,140,20);
  Blue= createSprite(525-450,590,140,20);
  Purple.shapeColor="purple"
  Green.shapeColor="green"
  Yellow.shapeColor="yellow";
  Blue.shapeColor="blue";
  music.loop();
    Ball= createSprite(300,100,20,20)
   Ball.shapeColor="grey";
 Ball.velocityX=5;
  Ball.velocityY=4;
}

function draw() {
    background("black");
   
    edges= createEdgeSprites();
if(Ball.isTouching(Green)){
  Ball.shapeColor="purple";
}else if(Ball.isTouching(Purple)){
  Ball.shapeColor="green"
}else if(Ball.isTouching(Yellow)){
  Ball.shapeColor="yellow"
}else if(Ball.isTouching(Blue)){
  Ball.shapeColor="blue"
  Ball.velocityY=0;
  Ball.velocityX=0;
  music.stop;
}

Ball.bounceOff(edges)
  Ball.bounceOff(Purple);
  Ball.bounceOff(Green);
  Ball.bounceOff(Yellow);
  Ball.bounceOff(Blue);
drawSprites();
textSize(28);
text("When the ball touches the Blue colour it stops",10,100);
    
}
