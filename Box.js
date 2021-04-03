class Box {
    constructor(x,y,width,height,angle){
        var options = {
            density: 0.5,
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("vedant2.0.png");
        Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("red");
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }

}