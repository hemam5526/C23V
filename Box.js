class Box
{
    //properties
    constructor(x,y,width,height)
    {
        var ball_options ={
            restitution: 1.5
        }
    
        this.body = Bodies.rectangle(x,y,width,height, ball_options);
        this.w = width;
        this.h = height;
        World.add(world,this.body);
    }


    //function
    display()
    {
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.w,this.h);
    }

}