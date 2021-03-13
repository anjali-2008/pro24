
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var p;
var h;
var s;
var r;

function preload()
{
	
}

function setup() {
    var canvas=createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

//Create the Bodies Here.
  p=new plane(600,height,1200,20);
	s=new stone(100,100,100,100);
	h=new hammer(100,100);
  r=new rubber(200,200,40,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  p.display()
  h.display()
  s.display()
  r.display()
  
  drawSprites();
 
}



