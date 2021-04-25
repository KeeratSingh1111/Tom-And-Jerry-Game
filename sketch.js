var cat;
var mouse;
var bgImg;




function preload() {
    //load the images here
    bgImg = loadImage('images/garden.png');
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation('images/cat2.png');
    mouseImg2 = loadAnimation('images/mouse2.png');
    catImg4 = loadImage("images/cat4.png");
}

function setup(){
    canvas = createCanvas(800,800);
    //create tom and jerry sprites here
     cat = createSprite(800,600,50,60);
     cat.addAnimation ("catSleeping",catImg1);
     cat.scale = 0.2;
     mouse = createSprite(200,600,60,40);
     mouse.addAnimation ("mouseStanding",mouseImg1);
     mouse.scale = 0.1;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.X - mouse.X<(cat.width - mouse.width)/2){
       cat.valocitX = 0
       cat.addAnimation("cat4",catImg4);

    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode=== LEFT_ARROW){\
    
     cat.addAnimation("catRunning",catImg2);
     cat.changeAnimation("catRunning");
     cat.frameDelay = 25;

  }
  if(keyCode=== RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
 }

}
