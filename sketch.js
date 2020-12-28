
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,dustbinImage;

function preload(){
	dustbinImage = loadImage("green dustbin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(200,200,70);
	ground = new Ground(400,650,800,5);

	box1 = new Box(600,650,200,20);
	box2 = new Box(700,500,20,300);
	box3 = new Box(500,500,20,300);

	boxSprite = createSprite(600,500,200,300);
	boxSprite.addImage(dustbinImage);
	boxSprite.scale=0.95

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  paper1.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();


  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:500,y:-1000});
	}
}

