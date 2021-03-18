class Chain{
    constructor(bodyA,bodyB){
        var option ={
         bodyA : bodyA ,
         bodyB : bodyB,
         bodyC : bodyC,
         bodyD : bodyD,
         bodyE : bodyE,
         bodyF : bodyF ,
         bodyG : bodyG ,
         bodyH : bodyH ,
         bodyI : bodyI ,
         bodyJ : bodyJ ,
         stiffness : 0.04, 
         length : 10
 
        }
        this.chain = Constraint.create(option);
        World.add(world,this.chain); 
    }
    display(){
       var pointA = this.chain.bodyA.position;
       var pointB = this.chain.bodyB.position;
       var pointC = this.chain.bodyC.position;
       var pointD = this.chain.bodyD.position;
       var pointE = this.chain.bodyE.position;
       var pointF = this.chain.bodyF.position;
       var pointG = this.chain.bodyG.position;
       var pointH = this.chain.bodyH.position;
       var pointI = this.chain.bodyI.position;
       var pointJ = this.chain.bodyJ.position;
       strokeWeight(4);
       line(pointA.x,pointA.y,pointB.x,pointB.y);
       line(pointC.x,pointC.y,pointD.x,pointD.y);
       line(pointE.x,pointE.y,pointF.x,pointF.y);
       line(pointG.x,pointG.y,pointH.x,pointH.y);
       line(pointI.x,pointI.y,pointJ.x,pointJ.y);
       
        
    }
 
 }