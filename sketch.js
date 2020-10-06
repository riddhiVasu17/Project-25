//game states
var PLAY = 1;
var SERVE = 0;
var gameState = SERVE;

//objects
var ground1, edge1, edge2;
var bg, bg2;
var bin1, bin2, bin3;
var paper1;
var paperSprite, paperImg, binSprite, binImg;
var kid, kidImg;

//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{   //load images here
	bg = loadImage("bg.jpg");
	bg2 = loadImage("bg2.png");
	binImg = loadImage("bin.png");
	paperImg = loadImage("paper1.png");
	kidImg = loadImage("kid.png");

}

function setup() {
	//create canvas
	createCanvas(1535, 718);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies and Sprites here.
    paper1 = new paper(310, 500, 40);

	bin1 = new bin(1100, 600, 20, 100);
	bin2 = new bin(1300, 600, 20, 100);
	bin3 = new bin(1200, 640, 200, 20);
   
	ground1 = new ground(width/2, 650, width, 20);

	edge1 = new ground(1520, height/2, 20, height);
	edge2 = new ground(width/2, 10, width, 20);

	paperSprite = createSprite(200, 600, 200, 200);
	paperSprite.addImage(paperImg);
	paperSprite.scale = (0.4);

	binSprite = createSprite(1200, 600, 200, 200);
	binSprite.addImage(binImg);
	binSprite.scale = (0.55);

	kid = createSprite(140, 500, 100, 100);
	kid.addImage(kidImg);
	kid.scale = (0.4);

	//update engine
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  //when game state is serve, perform following
  if (gameState === SERVE) {
  
	//background image
	background(bg2);

	//text
	fill("black");
	textFont("Times New Roman");
	textStyle(BOLD);
	textSize(42);
	text("Press Space to Play", 550, 280);

	fill("red");
	textFont("Times New Roman");
	textStyle(ITALIC);
	textSize(30);
	text("*Throw the waste in Bin properly*", 510, 420);

	fill("green");
	textFont("Times New Roman");
	textStyle(BOLD);
	textSize(50);
	text("🌍 SAVE the EARTH 🌎", 450, 150);

	  //when space is pressed, change game state into play
	  if (keyDown("space")){
		  gameState = PLAY;
	  }
  }

  //when game state is play, perform following
  if (gameState === PLAY) {
  //display ground
  ground1.display();
  edge1.display();
  edge2.display();
		
  //background image
  background(bg);

  //make the position of paper's sprite and body same
  paperSprite.x = paper1.body.position.x;
  paperSprite.y = paper1.body.position.y;

  //display them
  paper1.display();

  bin1.display();
  bin2.display();
  bin3.display();

  //condition for space key
  if (paper1.body.position.x < 1000) {
	 keyPressed();
  }

  //Appreciate when goal is completed
  if (paper1.body.position.x > 1100 && paper1.body.position.x < 1400 && paper1.body.position.y > 550) {
	fill(0);
	textFont("Comic Sans MS");
	textStyle(BOLD);
	textSize(45);
	text("YAY! Great Job 🍀", 450, 540);
 }

 //display created sprites
 drawSprites();

 }
}


function keyPressed(){

	//when space key is pressed, make the paper jump and move towards bin
	if (keyDown(UP_ARROW)) {
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:85,y:-85})
	}
}

/*___________________________________________________________________________________________________________________________________________*/