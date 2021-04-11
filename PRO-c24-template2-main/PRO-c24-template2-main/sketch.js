const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone1,stone2,stone3,stone4,stone5;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(0,0,this.r,this.r);
    stone1= new Stone(0,0,this.r,this.r)
    stone2= new Stone(0,0,this.r,this.r)
    stone3= new Stone(0,0,this.r,this.r)
    stone4= new Stone(0,0,this.r,this.r)
    stone5= new Stone(0,0,this.r,this.r)


  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();


    
 
}