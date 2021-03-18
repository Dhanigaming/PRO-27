
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bb1,roof1,chain;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bb1 = new Bob(100,500,PI/2);
	bb2 = new Bob(140,500,PI/2);
	bb3 = new Bob(180,500,PI/2);
	bb4 = new Bob(220,500,PI/2);
	bb5 = new Bob(260,500,PI/2);

	roof1 = new roof(100,200,40,20);
	roof2 = new roof(120,200,40,20);
	roof3 = new roof(140,200,40,20);
	roof4 = new roof(160,200,40,20);
	roof5 = new roof(180,200,40,20);

	chain = new Chain(ball1.body,rec1.body);
	chain1 = new Chain(ball2.body,rec2.body);
	chain2 = new Chain(ball3.body,rec3.body);
	chain3 = new Chain(ball4.body,rec4.body);
	chain4 = new Chain(ball5.body,rec5.body);
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  bb1.display();
  bb2.display();
  bb3.display();
  bb4.display();
  bb5.display();

  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();

  chain.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();

  
  drawSprites();
 
}



