class Slingshot
    {

        constructor(body1, point2)
        {
            var options = {
                bodyA : body1,
                pointB : point2,
                stiffness : 0.2,
                length : 10
            } 
    
            this.sling = Matter.Constraint.create(options);
            this.pointB = point2;
            World.add(world,this.sling);
        }
    
        fly(){
            //code to make the body attached to slingshot fly away
            this.sling.bodyA = null ;
            
        }
    display(){
        //if the bodyA is not null
        if(this.sling.bodyA)
        {
            var pointA = this.sling.bodyA.position
            //var pointB = this.sling.pointB.position

            strokeWeight(5);
            line(pointA.x, pointA.y,  this.pointB.x, this.pointB.y);
        }
    }
    
}