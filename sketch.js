const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon_image

function preload() {
    polygon_image = loadImage("polygon.png")
}

function setup() {
    createCanvas(900, 400);

    engine = Engine.create();
    world = engine.world;

    Engine.run(engine)

    ground = new Ground(450, 390, 900, 20)

    stand1 = new Ground(390, 300, 250, 10);
    stand2 = new Ground(700, 200, 250, 10);
//level1
    block1 = new Box(300, 275, 30, 40);
    block2 = new Box(330, 275, 30, 40);
    block3 = new Box(360, 275, 30, 40);
    block4 = new Box(390, 275, 30, 40);
    block5 = new Box(420, 275, 30, 40);
    block6 = new Box(450, 275, 30, 40);
    block7 = new Box(480, 275, 30, 40);
  //level2
    block8 = new Box(330, 235, 30, 40);
    block9 = new Box(360, 235, 30, 40);
    block10 = new Box(390, 235, 30, 40);
    block11 = new Box(420, 235, 30, 40);
    block12 = new Box(450, 235, 30, 40);
  //level3
    block13 = new Box(360, 195, 30, 40);
    block14 = new Box(390, 195, 30, 40);
    block15 = new Box(420, 195, 30, 40);
  //top
  block16 = new Box(390, 155, 30, 40);

//level1
  block17 = new Box(630,100,30,40);
  block18 = new Box(660,100,30,40);
  block19 = new Box(690,100,30,40);
  block20 = new Box(720,100,30,40);
  block21 = new Box(750,100,30,40);
  block22 = new Box(780,100,30,40);
  block23 = new Box(600,100,30,40);
//level2
  block24 = new Box(660,150,30,40);
  block25 = new Box(690,150,30,40);
  block26 = new Box(720,150,30,40);
  block27 = new Box(750,150,30,40);
  block28 = new Box(630,150,30,40);
   
 //level3
 block29 = new Box(690,180,30,40); 
 block30 = new Box(720,180,30,40);
 block31 = new Box(660,180,30,40);

 //top
 block32 = new Box(690,30,30,40); 



ball = Bodies.circle(50,200,20)
World.add(world,ball)

slingShot = new Slingshot(this.ball,{x:100,y:200});

}


function draw() {
    background("black");
    ground.display();

    stand1.display()
    stand2.display();

    fill("yellow")
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();

    
    

    imageMode(CENTER)
    image(polygon_image ,ball.position.x,ball.position.y,40,40);

 slingShot.display();


}


function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }

    


  function mouseReleased(){
    slingShot.fly();
  }