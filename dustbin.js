class Box{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }

        
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
       // this.image =loadImage("green dustbin.png");
        World.add(world,this.body);
        
    }

    display(){
        var pos;
        pos = this.body.position;
       // var angle;
       // angle = this.body.angle;
       // push();

       // fill("red");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
       // pop();
    }
}