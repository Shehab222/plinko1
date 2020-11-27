
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var plinkos=[];
var particles=[];
var divisions=[];

var divisionHeight = 250;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
	world = engine.world;
  
for(var a=50; a<=width-10; a=a+50){
  //adding the plinkos to array
  //push command helps t add new values in the array
plinkos.push(new Plinko(a,175,10));
}

for(var b=50; b<=width-10; b=b+50){
  //adding the plinkos to array
  //push command helps t add new values in the array
plinkos.push(new Plinko(b,275,10));
}

for(var c=50; c<=width-10; c=c+50){
  //adding the plinkos to array
  //push command helps t add new values in the array
plinkos.push(new Plinko(c,375,10));
}

for(var d=50; d<=width-10; d=d+50){
  //adding the plinkos to array
  //push command helps t add new values in the array
plinkos.push(new Plinko(d,475,10));
}

for (var k = 0; k <=width; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}


ground = new Ground(400,795,800,10);

}

function draw() {
  background(0); 
  Engine.update(engine);

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  for (var j = 0; j < divisions.length; j++) {
     
    divisions[j].display();
    
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(10,780), 10,10));
  }

 for (var x = 0; x < particles.length; x++) {
  
    particles[x].display();
  }
ground.display();

   
}