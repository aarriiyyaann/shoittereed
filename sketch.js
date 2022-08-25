
var backgroundImg
var shooterImg1
var shooterImg2
var targetImg
var bg
var target 

function preload(){
  shooterImg1 = loadImage("assets/shooter_3.png")
  shooterImg2 = loadImage("assets/shooter_2.png")
  targetImg = loadImage("assets/targe.webp")
 backgroundImg = loadImage("assets/bg.jpeg")
}

function setup(){
  createCanvas(windowWidth, windowHeight)
 bg =  createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(backgroundImg)

player1 = createSprite(displayWidth-1150,displayHeight-300,50,50)
player1.addImage(shooterImg1,shooterImg2)
player1.scale = 0.3


}

function draw(){
if(keyWentDown("space")){
  player.addImage(shooterImg1)
  
}
else if(keyWentUp("space")){
player1.addImage(shooterImg2)
}
targets()
drawSprites()
}
function targets(){
if(frameCount%60 == 0){
target = createSprite(random(500,1100),random(100,500),40,50)
target.addImage(targetImg)
target.scale = 0.1
target.mouseClicked(vanish)
}
}
function vanish(){
  target.destroy()
}






