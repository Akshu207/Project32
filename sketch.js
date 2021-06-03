const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var base1, base2;
var score = 0;
var backgroundImg;

function preload(){
    getBackgroundImg()
}
function setup(){
    var canvas = createCanvas(1200,700);

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    base1= new Base(390,592,300,10);
    base2= new Base(930,450,200,10);

    //level1

   block0 = new Box(300,560,30,50);
   block1 = new Box(330,560,30,50);
   block2 = new Box(360,560,30,50);
   block3 = new Box(390,560,30,50);
   block4 = new Box(420,560,30,50);
   block5 = new Box(450,560,30,50);
   block6 = new Box(480,560,30,50);

   //level2

   block8 = new Box (330,510,30,50);
   block9 = new Box(360,510,30,50);
   block10 = new Box(390,510,30,50);
   block11 = new Box (420,510,30,50); 
   block12 = new Box(450,510,30,50);
   
   //level3

   block13 = new Box(360,460,30,50);
   block14 = new Box(390,460,30,50);
   block15 = new Box(420,460,30,50);

   //top

   block16 = new Box (390,410,30,50);


   //smallLevel1

   block17 = new Box(870,418,30,50);
   block18 = new Box(900,418,30,50);
   block19 = new Box(930,418,30,50);
   block20 = new Box(960,418,30,50); 
   block21 = new Box(990,418,30,50);
    
   //smallLevel2
   block22 = new Box(900,367,30,50);
   block23 = new Box(930,367,30,50);
   block24 = new Box(960,367,30,50);

   //smallLeveltop

   block25 = new Box(930,317,30,50);


   Stone1 =new Stone(50,400,20)

   sling = new SlingShot(Stone1.body,{x:150,y:450})
 
  
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

   drawSprites();

   strokeWeight(2);
 
   textSize(13);
   fill("blue");
   text("Score:" + score, width-300,50 )

    base1.display();
    base2.display();

    fill(rgb(189, 75, 227));
    strokeWeight(2)
    block0.display();
    block0.score();
    block1.display();
    block1.score();
    block2.display();
    block2.score();
    block3.display();
    block3.score();
    block4.display();
    block4.score();
    block5.display();
    block5.score();
    block6.display();
    block6.score();

    fill("skyblue");
    block8.display();
    block8.score();
    block9.display();
    block9.score();
    block10.display();
    block10.score();
    block11.display();
    block11.score();
    block12.display();
    block12.score();

    fill("lightgreen");
    block13.display();
    block13.score();
    block14.display();
    block14.score();
    block15.display();
    block15.score();

    fill(rgb(245, 204, 93));
    block16.display();
    block16.score();

    fill("green");
    block17.display();
    block17.score();
    block18.display();
    block18.score();
    block19.display();
    block19.score();
    block20.display();
    block20.score();
    block21.display();
    block21.score();

    fill("yellow");
    block22.display();
    block22.score();
    block23.display();
    block23.score();
    block24.display();
    block24.score();

    fill("orange");
    block25.display();
    block25.score();

    Stone1.display();
    sling.display()

fill("white")
textSize(20);
strokeWeight(6);
text("Drag the hexagonal stone to release it, & launch it towards the blocks ",69,50,)

}


function mouseDragged(){
    Matter.Body.setPosition(Stone1.body,{x:mouseX,y:mouseY})
}
  
  
  function mouseReleased(){
  sling.fly()
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(Stone1.body);
    }
  }
  
  async function getBackgroundImg() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var date = responseJSON.datetime;
    var hour = date.slice(11, 13);
    if(hour>=06 && hour<=19){
        bg = "Sprites/bg.jpg"
    } else {
        bg = "Sprites/bg1.jpg"
    }
    backgroundImg = loadImage(bg);
}

 

