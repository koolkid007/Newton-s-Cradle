class Rope{
    constructor(body1, body2, offsetX, offsetY) {

      this.offsetX = offsetX;
      this.offsetY = offsetY;
      var options ={
         bodyA: body1,
         bodyB: body2,
         pointB:{x:this.offsetX, y:this.offsetY},

      }  
  
      this.rope = Constraint.create(options);
      World.add(world,this.rope);
    }
  
    display() {
        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;
        
        var AnchorX = posB.x + this.offsetX
        var AnchorY = posB.y + this.offsetY

        strokeWeight(2);
        stroke('grey');
        
        line(posA.x,posA.y,AnchorX, AnchorY);
      
    
  
    }
  
  }