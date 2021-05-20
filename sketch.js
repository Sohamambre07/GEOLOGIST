
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1= new Ground(600,680,1200,20)
	stone1= new Stone(100,100,100,100)
	rubber1= new Rubber(300,100,30)
	hammer1= new Hammer(500,100,100,30)
	iron1= new Iron(500,500,70,70)
  particle1= new Particle1(600,600,10,10)
  particle2= new Particle2(600,600,10,10)
  particle3= new Particle3(600,600,10,10)
  particle4= new Particle4(600,600,10,10)
  particle5= new Particle5(600,600,10,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  drawSprites();
 
  ground1.display()
  stone1.display()
  rubber1.display()
  hammer1.display()
  iron1.display()
  particle1.display()
  particle2.display()
  particle3.display()
  particle4.display()
  particle5.display()

}



