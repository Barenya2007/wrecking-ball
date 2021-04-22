class ball {
    constructor(x,y,width,height){
        var options={
            isStatic: false,
            density: 0.8,
            friction: 0.8
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }

    display(){
        push()
        fill ("red")
        translate (this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        rectMode(CENTER)
        ellipse(0,0,this.width,this.height)
        pop()

    }

}
