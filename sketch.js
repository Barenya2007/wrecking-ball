const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
 
    ground1= new ground(300,480,600,10)
    block1= new block(500,429,50,50)
    block2= new block(500,379,50,50)
    block3= new block(500,329,50,50)
    block4= new block(500,279,50,50)
    block5= new block(500,229,50,50)
    block6= new block(500,179,50,50)
    block7= new block(500,129,50,50)
    ball1= new ball(300,250,70,70)
    sling1= new slingshot(ball1.body,{x:300,y:20})
}

function draw(){
    background("grey");
    Engine.update(engine);
    
    ground1.display()
    block1.display()
    block2.display() 
    block3.display() 
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    ball1.display()
    sling1.display()
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}