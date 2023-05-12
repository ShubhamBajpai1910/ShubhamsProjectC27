class Rod{

  constructor(x,y,width,height){
  var options={isStatic:true}
  this.body=Bodies.rectangle(x,y,width,height,options);
  this.width=width;
  this.height=height;
  World.add(world , this.body);}

  display(){
  var pos = this.body.position;
  push();
  translate(pos.x,pos.y);
  strokeWeight(4);
  stroke("#191970");
  fill("black");
  rectMode(CENTER);
  rect(0,0,this.width,this.height);
  pop();}}