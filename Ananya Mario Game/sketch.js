var mario, mario_running;
var ground, ground_image;

var score = 0;

function preload() {
  mario_running = loadAnimation("Mario1.png", "Mario2.png", "Mario3.png");
  groundImage = loadImage("ground.png");
}

function setup() {
  createCanvas(700, 200);
  
  mario = createSprite(150,195,20,50);
  mario.addAnimation("running", mario_running);
  mario.scale = 0.25;
  
  ground = createSprite(0, 190, 1200, 10);
  ground.addImage(groundImage)
  ground.x = ground.width / 2;
  ground.velocityX = -(6 + (3 * score) / 100);
}

function draw () {

  background("blue")
    drawSprites();
  if(keyDown("space") && mario.y >= 139) {
    mario.velocityY = -9;
    }
   
  if(ground.x<0) {
    ground.x = ground.width /2;
}

ground.velocityX = -7

}
