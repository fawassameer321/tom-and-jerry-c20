
var bground,mouse,cat;
var bgroundImg,mouseImg1,mouseImg2,mouseImg3,mouseImg4,catImg1,catImg2,catImg3,catImg4;





function preload() {
    //load the images here
    bgroundImg = loadImage ("images/garden.png");
    catImg1 = loadAnimation ("images/cat1.png")
    catImg2 = loadAnimation ("images/cat2.png")
    catImg3 = loadAnimation ("images/cat3.png")
    catImg4 = loadAnimation ("images/cat4.png")

    mouseImg1 = loadAnimation ("images/mouse1.png")
   mouseImg2 = loadAnimation ("images/mouse2.png")
   mouseImg3 = loadAnimation ("images/mouse3.png")
   mouseImg4 = loadAnimation ("images/mouse4.png")
}



function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(800,650,10,10)
cat. addAnimation( "sleeping",catImg1);
cat.scale = 0.09;

mouse = createSprite(100,650);
mouse.addAnimation ("standing",mouseImg1)
mouse.scale = 0.09;
}

function draw() {

background(bgroundImg);
    //Write condition here to evalute if tom and jerry collide
  
if(cat.x - mouse.x   <  cat.width/2 - mouse.width/2) {
    cat.velocityX=0;
    cat.addAnimation("lastImage",catImg4);
    cat.changeAnimation("lastImage",catImg4); 
    
    
    mouse.velocityX=0;
    mouse.addAnimation("jerrylastImage",mouseImg4);
   mouse.changeAnimation("jerrylastImage",mouseImg4); 
}



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("running",catImg2);
    cat.changeAnimation("running",catImg2); 

    mouse.addAnimation("jerryrunning",mouseImg3);
    mouse.changeAnimation("jerryrunning",mouseImg3); 
  }


}
