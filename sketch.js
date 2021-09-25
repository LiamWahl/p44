var player, playerImage, playerImage2;
var sceneImage;
var backgroundImage
var monster1, monster1Image;
var monster2, monsterImage2;
var arrow, arrowImage;
var arrow2, arrowImage2;
var monsterGroup;
var gameState = "play";
var score = 0;
var lives = 3;


function preload(){
  sceneImage = loadImage("scene1.jpg");
  playerImage = loadImage("player1-removebg-preview.png");
  playerImage2 = loadImage("player2-removebg-preview (1).png");
  arrowImage = loadImage("arrow-removebg-preview.png");
  arrowImage2 = loadImage("arrow2-removebg-preview.png");
  monster1Image = loadImage("monster-removebg-preview.png");
  monsterImage2 = loadImage("monster2-removebg-preview.png");
  backgroundImage = loadImage("background.jfif");

}



function setup() {
  createCanvas(1000, 400);

  player = createSprite(500,310)
  player.addImage(playerImage);
  player.scale = .2

  monsterGroup = createGroup();

   
}

function draw() {
  background(backgroundImage);
  fill("lime");
  textSize(20);
  text("Score : "+ score, 50,70);
  text("Lives : "+ lives, 50,50);

  if (gameState === "play"){

  if(keyIsDown(RIGHT_ARROW)){
    player.addImage(playerImage);
  }

  if(keyIsDown(LEFT_ARROW)){
    player.addImage(playerImage2);
  }


  if(keyWentUp(RIGHT_ARROW)){
    rightArrow();
    
  }

  if(keyWentUp(LEFT_ARROW)){
    leftArrow();
    
  }

  if(monsterGroup.isTouching(player)){
   //console.log("Game Over");
    gameState = "reset";
    player.destroy();
    monsterGroup.destroyEach();
    
  }

  spawnMonster();



  drawSprites();
}
 
if (gameState === "reset"){
  background(0);
  fill("red");
  stroke("maroon");
  textSize(40);
  text("You Failed", width/2-100, height/2);
}
}



 function rightArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage2);
  //arrow.x = 520;
  arrow.y=player.y + 10;
  arrow.x = player.x+30;
 // arrow.velocityX = 4;
 // arrow.lifetime = 100;
  arrow.scale = 0.1;
  arrow.velocityX= 10
}

function leftArrow() {
  var arrow2= createSprite(100, 100, 60, 10);
  arrow2.addImage(arrowImage);
  //arrow.x = 520;
  arrow2.y=player.y +10;
  arrow2.x = player.x-30;
 // arrow.velocityX = 4;
 // arrow.lifetime = 100;
  arrow2.scale = 0.1;
  arrow2.velocityX= -10


}



function spawnMonster() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
       
    var rand = Math.round(random(1,2));
    if (rand === 1){
      monster = createSprite(width,320,40,10);
      monster.addImage(monster1Image);
      monster.velocityX = -3;
    }
    else if (rand === 2){
      monster = createSprite(0,320,40,10);
      monster.addImage(monsterImage2);
      monster.velocityX = 3; 
    }
   
    monster.scale = 0.6;
    monster.y = player.y+5;
    //monster1.velocityX = -3;
    monsterGroup.add(monster);
    
    
    
    }
}






