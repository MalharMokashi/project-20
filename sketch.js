
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1,block2;
var wedge1,wedge2,wedge3;
var angle1 = 60;
var angle2 = 60;
var angle3 = 60;
var plane;
var particle1,particle2,particle3,particle4,particle5;

function preload() { }
 function setup() 
 {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world; 

	block1_options={ isStatic:true } 
	block1 = Bodies.rectangle(200,350,150,20,block1_options);
    World.add(world,block1); 

    block2_options={ isStatic:true }
	block2 = Bodies.rectangle(600,350,150,20,block2_options);
	World.add(world,block2);

	wedge1_options={ isStatic:true};
	wedge2_options={ isStatic:true};
	wedge3_options={ isStatic:true};
	plane_options={ isStatic:true };
	particle1_options={
		restituition:0.4,
		friction:0.02
	}
	particle2_options={
		restituition:0.4,
		friction:0.02
	}
    particle3_options={
		restituition:0.4,
		friction:0.02
	}
	particle4_options={
		restituition:0.4,
		friction:0.02
	}
    particle5_options={
		restituition:0.4,
		friction:0.02
	}

	wedge1 = Bodies.rectangle(400,100,150,20,wedge1_options);
	World.add(world,wedge1);

	wedge2 = Bodies.rectangle(400,100,20,150,wedge2_options);
	World.add(world,wedge2);

	wedge3 = Bodies.rectangle(400,100,100,10,wedge3_options);
    World.add(world,wedge3);

	plane = Bodies.rectangle(400,700,800,10,plane_options);
	World.add(world,plane);

	particle1 = Bodies.circle(400,10,20,particle1_options);
	World.add(world,particle1);

	particle2 = Bodies.circle(400,10,20,particle2_options);
	World.add(world,particle2);

	particle3 = Bodies.circle(400,10,20,particle3_options);
	World.add(world,particle3);

	particle4 = Bodies.circle(400,10,20,particle4_options);
	World.add(world,particle4);

	particle5 = Bodies.circle(400,10,20,particle5_options);
	World.add(world,particle5);


	Engine.run(engine);
} 
		 
		 
		 
function draw() 
{
	rectMode(CENTER); 
	background("lightGreen")
  
	rect(block1.position.x,block1.position.y,150,20);
	rect(block2.position.x,block2.position.y,150,20);
	rect(plane.position.x,plane.position.y,800,10);
	ellipse(particle1.position.x,particle1.position.y,20);
	ellipse(particle2.position.x,particle2.position.y,20);
	ellipse(particle3.position.x,particle3.position.y,20);
	ellipse(particle4.position.x,particle4.position.y,20);
	ellipse(particle5.position.x,particle5.position.y,20);


	Matter.Body.rotate(wedge1,angle1);

	push();
	translate(wedge1.position.x,wedge1.position.y);
	rotate(angle1);
	rect(0,0,150,20);
	pop();
	angle1 = angle1+1;

	Matter.Body.rotate(wedge2,angle2);

	push();
	translate(wedge2.position.x,wedge2.position.y);
	rotate(angle2);
	rect(0,0,150,20);
	pop();
	angle2 = angle2+2;

	Matter.Body.rotate(wedge3,angle3);

	push();
	translate(wedge3.position.x,wedge3.position.y);
	rotate(angle3);
	rect(0,0,150,20);
	pop();
	angle3 = angle3+3;
	

	//drawSprites();
}
			 



