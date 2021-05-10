class Launcher{
    constructer(body,anchor){
        var options={
         bodyA:body,
         pointB:anchor,
         stiffness:1,
         length:7,
        }
        this.bodyA=body;
        this.pointB=anchor;
        this.launcher=Constraint.create(options);
        World.add(world.this.launcher);
    }
    attach(body){
        this.launcher.bodyA=body;
    }
    fly(){
        this.launcher.bodyA=null;
    }
    display(){
        if(this.launcher.bodyA){
            var pointA=this.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(3)
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }

    }
}
