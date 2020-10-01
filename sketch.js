const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(500,200,300,25);
	
	bob1 = new Bob(400,400);
  bob2 = new Bob(450,400);
	bob3 = new Bob(500,400);
	bob4 = new Bob(550,400);
	bob5 = new Bob(600,400);

	rope1 = new Rope(bob1.body,roof.body,-100, 0);
	rope2 = new Rope(bob2.body,roof.body,-50, 0);
	rope3 = new Rope(bob3.body,roof.body,0, 0);
	rope4 = new Rope(bob4.body,roof.body,50, 0);
	rope5 = new Rope(bob5.body,roof.body,100, 0);

	Engine.run(engine);
  
}


function draw() {
  background("lightgrey");
  rectMode(CENTER);
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
 
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-55, y:-55});
  }
}



