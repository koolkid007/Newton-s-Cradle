class Bob {
    constructor(x,y) {
      var options ={
        isStatic: false,
        restitution: 1,
        friction: 0,
        density: 0.8
     } 
  
      this.body = Bodies.circle(x, y, 25, options);
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      fill("pink");
      stroke("black");
      rectMode(CENTER);
      ellipse(0,0,50,50);
      pop();
     }
  };