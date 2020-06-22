class Ball{
  constructor(x,y,radius){
      var options = {
          isStatic : false,
          'restitution':0.8
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.body.x = x;
      this.body.y = y;
      this.radius = radius; 
      World.add(world, this.body);
  }  
  
  display()
    {
     var pos2 =this.body.position;
     ellipseMode(RADIUS);
     fill("blue");
     ellipse(pos2.x, pos2.y, this.radius);
    }
};    



 