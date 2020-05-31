var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground1, ground2;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(178,331);
  ground = new Ground(600, 400, 1300, 20);
  
  dustbin1 = new Dustbin(920,380,150,20);
	dustbin2  = new Dustbin(920,310,20,70);

    dustbin3 = new Dustbin(1045,310,20,70);
    
    ground1 = new Ground(1045, 360,15,100)
    ground2 = new Ground(920,390,130,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  text("dustbin here. Press up arrow", 1000,200);
  
  ground.display();
  ground1.display();
  ground2.display();
  dustbin1.display();

  dustbin2.display();

  dustbin3.display();
  paper.display();
  
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-44})
  }
}