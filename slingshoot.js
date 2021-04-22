class slingshot {
    constructor(bodyA, pointB){
        var options={
        bodyA: bodyA,
        pointB:pointB,
        stiffness: 1,
        lenght: 300
        }
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
    }

    display(){
        strokeWeight(5)
        line (this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,
            this.sling.pointB.y)


    }

}
