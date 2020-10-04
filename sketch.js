var bg,bg_img;

var m, m_running;

var score =0;

function preload()
{
  bg_img = loadImage("jungle.png");
  
  
  
  
  m_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
}
function setup() {
  createCanvas(600, 400);
  
  bg= createSprite(200,200,1200,10);
  bg.addImage(bg_img);
  bg.scale =2.0;
  bg.velocityX=-2;
  
  m =createSprite(50,360,10,10);
  m.addAnimation("running",m_running);
  m.scale = 0.1;
  
}

function draw() {
  background(220);
  
  if(bg.x<150)
  {
    bg.x=bg.width/2
  }
  
  
  
  
  
  drawSprites();
  textSize(20);
  fill("white");
  text("SCORE:" + score ,400,50);
}