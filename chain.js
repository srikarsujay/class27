class Chain{
    constructor(bodyA,bodyB){
        
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.05
        }
    
        this. connection = Constraint.create(options);
        World.add(world,this.connection);

    }
     display(){
        strokeWeight(5)
        var pointA=this.connection.bodyA.position
        var pointB=this.connection.bodyB.position
        line(pointA.x,pointA.y,pointB.x,pointB.y)}

}