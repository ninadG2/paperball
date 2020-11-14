class bin
{
    constructor(x,y,widtha,heighta)
    {   
        var optiona = {isStatic:true}

        this.body = Bodies.rectangle(x,y,widtha,heighta,optiona)
        World.add(world, this.body)
        this.width = widtha;
        this.height = heighta;
      
    }
    


appear()
{
    var pos = this.body.position;
    push()
          fill("red");
          rectMode(CENTER);
                
          rect(pos.x, pos.y, this.width, this.height);
        pop();
}

}