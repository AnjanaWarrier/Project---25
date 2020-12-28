class Paper {
    constructor(x, y, r) {
      var options = {
          'restitution':0,
          'friction':0,
          'density':1.2,
          'isStatic':false
      }
      this.body = Bodies.circle(x, y, r, options);
      this.radius = r;
      this.image =loadImage("crumpled paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(RADIUS);
     // fill("yellow");
      image(this.image,0, 0, this.radius,this.radius);
      pop();
    }
  };
  