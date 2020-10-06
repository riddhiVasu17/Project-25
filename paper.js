class paper {

    constructor(x,y,radius){

        var option = {
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.circle(x, y, radius, option);
        World.add(world, this.body);

        this.body.radius = radius;

    }

    display(){
        var pos = this.body.position;
    
        rectMode(CENTER);
        rect(pos.x, pos.y, this.body.radius);
    }

}