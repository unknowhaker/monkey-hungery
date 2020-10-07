//creating animations sprites of monkey
  var player_running,bananaImage,stoneImage;
//creating banana, monkey and jungle animation sprites
  var banana, monkey, jungleBackground,ground;
//creating groups
 var cloudsGroup, obstaclesGroup;

function preload () {

//loading animations for monkey
player_running = loadAnimation("Monkey_01.png","Monkey_02.png", "Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png" );

//loading animations for banana,stone and background
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("stone.png");
  jungleBackgroundImage = loadImage("jungle.jpg");
}

function setup() {
  createCanvas(400, 400);
  
  jungleBackground = createSprite(200, 200, 400, 400);
  jungleBackground.addImage("jungle", jungleBackgroundImage);
   monkey=createSprite(50,320);
  monkey.addAnimation("monkeyrun",player_running);
  monkey.scale=0.2;

  bananaGroup=new Group();
  trapGroup=new Group();
  
  ground=createSprite(width/2,height-10,100000,5);
  ground.visible=false;
  

  score=0;
}

function draw() {
  background(220);
  monkey.collide(ground);
  if (keyDown ("space")&&monkey.y>=300){
      monkey. velocityY = -11;
    }
    monkey.velocityY = monkey.velocityY+0.5;
    jungleBackground. velocityX = -5;
    if (jungleBackground.x<=0){
      jungleBackground.x=jungleBackground.width/2;
    }
  if (ground.x<=0){
      ground.x=ground.width/2;
    }

    if (frameCount%60===0){
      funbanana();
    }

    if (frameCount%70===0){
      funTrap();
    }
    
    
    
    switch (score){
      case 10:monkey.scale=0.4;
        break;
      case 20:monkey.scale=0.6;
        break;
      case 30:monkey.scale=0.8;
        break;
      case 40:monkey.scale=0.9;
        break;
    }
  if (bananaGroup.isTouching(monkey)){
      score=score+2;
    bananaGroup.destroyEach();
    }
  if (trapGroup.isTouching(monkey)){
      monkey.scale=0.2;
      trapGroup.destroyEach();
      score=score-score/2
    }

 drawSprites();
  fill ("black")
  text("score "+score,200,80);
}

function funbanana(){
  var banana;
  banana=createSprite(700,100);
  banana.addImage(bananaImage);
  banana.scale=0.05;
  banana.y=Math.round(random(180,360));
  banana.velocityX= -3;
  banana.lifetime=702/3;
  banana.depth=monkey.depth;
  monkey.depth=monkey.depth+1;
  bananaGroup.add(banana);
}
function funTrap(){
  var trap;
  trap=createSprite(700,350);
  trap.addImage(stoneImage);
  trap.scale=0.4;
  trap.scale=0.2;
  trap.velocityX= -4;
  trap.lifetime=700/4;
  trapGroup.add(trap);
  }